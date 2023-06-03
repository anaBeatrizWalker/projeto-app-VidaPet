import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';

export function Header(){
  return (
    <View style={styles.header}>
        <Text style={styles.paragraph}>Agenda</Text>

        <View style={styles.buttonsGroup}>
          <View>
            <Picker selectedValue={''} style={styles.pickerInput} onValueChange={() => console.log('troca de filtro')}>
              <Picker.Item key={1} value={"Dia atual"} label="Dia atual"/>
              <Picker.Item key={2} value={"Semana"} label="Semana"/>
              <Picker.Item key={3} value={"Mês"} label="Mês" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.addNewButton}  onPress={addNew}>
            <FontAwesome name="plus" size={15} color="#ffffff"/>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonsGroup: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 20
  },
  addNewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 7,
    margin: 2,
  },
  pickerInput: {
    float: "right",
    border: 1,
    backgroundColor: "lightgray",
    borderRadius: 7,
    padding: 5,
    height: 31,
    margin: 2,
    width: 110,
  },
});