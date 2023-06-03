import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native';

import {styles} from './styles';

export default function New(props) {

  const navigation = useNavigation();

  const data = props.route.params;

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <Text style={styles.paragraph}>Novo gendamento</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Serviço: </Text>
        <TextInput
          placeholder={'Serviço'}
          style={styles.input}
          value={data.servico.nome}
        />

        <Text style={styles.label}>Profissional: </Text>
        <TextInput
          placeholder={'Nome do Doutor'}
          style={styles.input}
          value={data.nome}
        />

        <Text style={styles.label}>Preço: </Text>
        <TextInput
          placeholder={'Preço'}
          style={styles.input}
          value={(data.servico.preco).toString()}
        />

        <Text style={styles.label}>Pet: </Text>
        <TextInput
          placeholder={'Nome do Pet'}
          style={styles.input}
          value={''}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data: </Text>
            <TextInput
              placeholder={'Data'}
              style={styles.input}
              value={''}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Horário: </Text>
            <TextInput
              placeholder={'Horário'}
              style={styles.input}
              value={''}
            />
          </View>
        </View>

        <Text style={styles.label}>Observação: </Text>
        <TextInput
          placeholder={'Observação'}
          style={styles.input}
          value={''}
        />

        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => navigation.dispatch(StackActions.popToTop())}>
            <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 8, margin: 2, width: 90, height: 40, alignItems:'center', justifyContent: 'center' }}>
              <Text style={{color: 'white'}}>Cancelar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.dispatch(StackActions.popToTop())}>
            <View style={{ backgroundColor: 'green', padding: 10, borderRadius: 8, margin: 2, width: 90, height: 40, alignItems:'center', justifyContent: 'center' }}>
              <Text style={{color: 'white'}}>Confirmar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}