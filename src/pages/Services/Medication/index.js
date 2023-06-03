import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import {styles} from './styles';

import ButtonsServices from './../../../components/ServicesComponents/ButtonsServices.js';

export default function Medication(){
  
  return (
    <View style={styles.appointContainer}>
      <View>
        <TouchableOpacity style={styles.item} onPress={() => console.log('new')}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Doença do Carrapato</Text> 
            <Text style={styles.itemPrice}>$ 80.00</Text>
          </View>
          <View style={styles.itemInfos}>
            <View style={styles.itemTextRow}>
                <Text style={styles.itemText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
              </View>
              <ButtonsServices/>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.item} onPress={() => console.log('new')}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Verminose</Text> 
            <Text style={styles.itemPrice}>$ 55.90</Text>
          </View>
          <View style={styles.itemInfos}>
              <View style={styles.itemTextRow}>
                <Text style={styles.itemText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
              </View>
              <ButtonsServices/>
          </View>
        </TouchableOpacity>
      </View>    

      <View>
        <TouchableOpacity style={styles.item} onPress={() => console.log('new')}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>Artropatia</Text> 
            <Text style={styles.itemPrice}>$ 55.90</Text>
          </View>
          <View style={styles.itemInfos}>
              <View style={styles.itemTextRow}>
                <Text style={styles.itemText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
              </View>
              <ButtonsServices/>
          </View>
        </TouchableOpacity>
      </View>       
    </View>
  )
}