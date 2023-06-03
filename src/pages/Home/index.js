import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import api from './../../service/api';

import Tasks from './Tasks';

export default function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const petNina = require('./../../../assets/labradora-nina.jpg');
  const petAntonio = require('./../../../assets/siames-antonio.jpg');

  function viewOne(item){
    navigation.navigate('Details', item);
  }

  const navigate = (category) => {
      navigation.navigate('Services', category);
  }

  const getSchedule = async () => {
    const response = await api.get('/agenda/dia_atual');
    let resp = response.data;
    setData(resp);
    return resp;
  };

  useEffect(() => {
    getSchedule();
  }, []);

  const renderPreview = ({item}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => viewOne(item)}>
        <View style={styles.itemTitleAndText}>
          <Text style={styles.itemTitle}>{item.funcionario.servico.nome}</Text>
          <View style={styles.textGroup}>
            <Text style={styles.itemText}>{item.data}</Text> 
            <Text style={styles.itemText}>{item.horario}</Text> 
          </View>
        </View>
        <View style={styles.itemPetName}>
          <Image style={styles.image} source={(item.animal.nome === 'Nina' ? petNina : petAntonio)}/>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.paragraph}>Bem-vindo</Text>
      </View>

      {/*PreView Schedule*/}
      <Text style={styles.title}>Agendamentos do dia</Text>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        {data !== [] ? 
          (<FlatList key={t => t.id} data={data} renderItem={renderPreview} horizontal={true}/>)
         : 
          (<Text style={styles.message}>Nenhum agendamento hoje...</Text>)
        }
      </ScrollView>
      
      
      {/*Categories*/}
      <Text style={styles.title}>Serviços</Text>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.categoryItem} onPress={() => navigate('vet')}>
            <FontAwesome name="user-nurse" size={40} color="#2E294E"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem} onPress={() => navigate('hygiene')}>
            <FontAwesome name="shower" size={40} color="#1B998B"/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.categoryItem} onPress={() => navigate('vaccine')}>
            <FontAwesome name="syringe" size={40} color="#F46036"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem} onPress={() => navigate('medication')}>
            <FontAwesome name="pills" size={40} color="#D7263D"/>
          </TouchableOpacity>
        </View>
      </View>

      {/*TO DO List*/}
      <View>
        {/*Subtitle*/}
        <View style={styles.itemsSubtitle}>
          <Text style={{padding: 5, fontWeight: 'bold', color: 'gray',}}>Lembretes: </Text>
        </View>

        {/*Tasks List*/}
        <Tasks/>
      </View>
    </ScrollView>
  );
}