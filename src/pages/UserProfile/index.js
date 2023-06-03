import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, StatusBar, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import api from './../../service/api';

export default function UserProfile(){
  const [dark, setDark] = useState(false);
  const navigation = useNavigation();
  const [data, setData] = useState();
  const petNina = require('./../../../assets/labradora-nina.jpg');
  const petMaria = require('./../../../assets/siames-antonio.jpg');

  useEffect(() => {
    getUser();
    getMode();
  }, []);

  useEffect(() => {
    setMode();
  }, [dark]);

  async function setMode() {
    await AsyncStorage.setItem('dark', String(dark));
  }

  async function getMode() {
    const dark = await AsyncStorage.getItem('dark');

    setDark(dark === 'true' && true);
  }

  function viewOnePet(pet, dark){
    navigation.navigate('PetProfile', pet, dark);
  }

  function editProfile(user){
    navigation.navigate('EditUserProfile', user)
  }

  const getUser = async () => {
    const response = await api.get('/clientes/15');
    let resp = response.data;
    setData(resp);
    return resp;
  };

  const renderPet = ({item}) => {
    return (
      <TouchableOpacity style={[styles.pet, dark && styles["bg-gray"]]} onPress={() => viewOnePet(item)}>
        <View style={{justifyContent: 'center'}}>
          <Image style={styles.petImage} source={(item.especie === 'Cachorro' ? petNina : petMaria)}/>
          {/*<FontAwesome style={styles.petImage} name={item.especie === 'Cachorro' ? 'dog' : 'cat'} size={30} color="black"/>*/}
        </View>
        <View style={styles.petInfos}>
          <Text style={[styles.petName, dark && styles["text-dark"]]}>{item.nome}</Text>
          <Text style={[styles.text, dark && styles["text-dark"]]}>{item.raça}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  return (
    <View style={[styles.container, dark && styles["bg-dark"]]}>
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollview}>
        <StatusBar barStyle="default" />

        {/*UserProfile*/}
        <View style={styles.user}>
          <Image style={styles.image} source={require('./../../../assets/user-mariana.jpg')}/>
          <View style={styles.userName}>
            <Text style={[styles.name, dark && styles["text-dark"]]}>{data?.nome}</Text>
            <TouchableOpacity style={[styles.editButton, dark && styles["bg-gray"]]} onPress={() => editProfile(data)}>
              <FontAwesome name="pen" size={12} color="white" style={[styles.icon, dark && styles["text-dark"]]}/>
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, dark && styles["text-dark"]]}>{data?.email}</Text>
        </View>

        {/*Pet list*/}
        <Text style={styles.title}>Meus pets</Text>
        <View style={styles.petList}>
          {/*Pet*/}
          <FlatList key={t => t.id} data={data?.animais} renderItem={renderPet}/>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.button, dark && styles["bg-gray"]]}  onPress={() => console.log('add new pet')}>
            <FontAwesome name="plus" size={15} color="#ffffff"/>
          </TouchableOpacity>
        </View>

        <View style={styles.top}>
          <View style={styles.topSide}>
            <FontAwesome name="moon" size={20} color="black" style={[styles.icon, dark && styles["text-dark"]]}/>
            <Switch style={styles.switch}
              value={dark} onValueChange={(valor) => setDark(valor)} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}