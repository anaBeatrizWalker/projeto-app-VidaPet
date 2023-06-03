import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function Details(props) {

  const data = props.route.params;

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <Text style={styles.paragraph}>Agendamento</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Serviço: </Text>
        <TextInput
          placeholder={'Serviço'}
          style={styles.input}
          value={data.funcionario.servico.nome}
        />

        <Text style={styles.label}>Profissional: </Text>
        <TextInput
          placeholder={'Nome do Doutor'}
          style={styles.input}
          value={data.funcionario.nome}
        />

        <Text style={styles.label}>Preço: </Text>
        <TextInput
          placeholder={'Preço'}
          style={styles.input}
          value={(data.funcionario.servico.preco).toString()}
        />

        <Text style={styles.label}>Pet: </Text>
        <TextInput
          placeholder={'Nome do Pet'}
          style={styles.input}
          value={data.animal.nome}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data: </Text>
            <TextInput
              placeholder={'Data'}
              style={styles.input}
              value={data.data}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Horário: </Text>
            <TextInput
              placeholder={'Horário'}
              style={styles.input}
              value={data.horario}
            />
          </View>
        </View>

        <Text style={styles.label}>Observação: </Text>
        <TextInput
          placeholder={'Observação'}
          style={styles.input}
          value={data.observacao}
        />

      <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => console.log('update')}>
            <View style={{ backgroundColor: 'green', padding: 5, borderRadius: 5, margin: 2, width: 40, height: 30, alignItems:'center', justifyContent: 'center' }}>
              <FontAwesome name="pen" size={15} color="#ffffff"/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('delete')}>
            <View style={{ backgroundColor: 'red', padding: 5, marginLeft: 5, borderRadius: 5, margin: 2, width: 40, height: 30, alignItems:'center', justifyContent: 'center' }}>
              <FontAwesome name="trash-alt" size={15} color="#ffffff"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}