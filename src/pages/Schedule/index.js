import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {styles} from './styles';

import api from './../../service/api';

export default function Schedule(){

  const navigation = useNavigation();

  const [data, setData] = useState();

  function viewOne(item){
      navigation.navigate('Details', item);
  }

  const getSchedule = async () => {
    const response = await api.get('/agenda');
    let resp = response.data;
    setData(resp);
    return resp;
  };

  useEffect(() => {
    getSchedule();
  }, []);

  const renderSchedule = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={styles.item} onPress={() => viewOne(item)}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>{item.funcionario.servico.nome}</Text> 
            <Text style={styles.itemPetName}>{item.animal.nome}</Text>
          </View>
          <View style={styles.itemInfos}>
              <Text style={styles.itemText}>{item.funcionario.nome}</Text> 
              <Text style={styles.itemText}>{item.data}</Text> 
              <Text style={styles.itemText}>{item.horario}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
     <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
        {/*Header*/}
        <View style={styles.header}>
          <Text style={styles.paragraph}>Agenda</Text>

          {/* 
          <View style={styles.buttonsGroup}>
            <View>
              <Picker selectedValue={inputFilter} style={styles.pickerInput} onValueChange={(value, index) => {setInputFilter(value), console.log('input', inputFilter)}}>
                <Picker.Item key={1} value={"currentDay"} label="Hoje"/>
                <Picker.Item key={2} value={"currentWeek"} label="Essa semana"/>
                <Picker.Item key={3} value={"currentMounth"} label="Esse mês" />
              </Picker>
            </View>
            
            <TouchableOpacity style={styles.addNewButton}  onPress={addNew}>
              <FontAwesome name="plus" size={15} color="#ffffff"/>
            </TouchableOpacity>
          </View>
          */}
        </View>

        {/*Appointments*/}
        <FlatList key={t => t.id} data={data} renderItem={renderSchedule}/>
     </ScrollView>
  )
}