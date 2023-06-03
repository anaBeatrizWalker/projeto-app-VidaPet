import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {styles} from './styles';

import ButtonsServices from './../../../components/ServicesComponents/ButtonsServices.js';

export default function VeterinaryOptions(props){

  const services = props.services;
  const navigation = useNavigation();

  function toSchedule(service){
    navigation.navigate('New', service);
  }

  const renderService = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={styles.item} onPress={() => toSchedule(item)}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>{item.servico.nome}</Text>
            <Text style={styles.itemPrice}>$ {item.servico.preco}</Text>
          </View>
          <View style={styles.itemInfos}>
            <View style={styles.itemTextRow}>
              <View sryle={styles.itemTextGroup}>
                <Text style={styles.itemText}>Profissional: {item.nome}</Text>
                <Text style={styles.itemText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              </View>
            </View>
            <ButtonsServices/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <View style={styles.appointContainer}>
      <FlatList key={t => t.id} data={services} renderItem={renderService}/> 
    </View>
  )
}