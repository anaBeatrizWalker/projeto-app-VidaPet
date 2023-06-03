import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import ButtonGroup from './../../components/ButtonGroup.js';

export default function EditUserProfile(props) {

  const data = props.route.params;

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <Text style={styles.paragraph}>Editar conta</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome: </Text>
        <TextInput
          placeholder={'Nome'}
          style={styles.input}
          value={data.nome}
        />

        <Text style={styles.label}>E-mail: </Text>
        <TextInput
          placeholder={'E-mail'}
          style={styles.input}
          value={data.email}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>CPF: </Text>
            <TextInput
              placeholder={'CPF'}
              style={styles.input}
              value={data.cpf}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefone: </Text>
            <TextInput
              placeholder={'Telefone'}
              style={styles.input}
              value={data.telefone}
            />
          </View>
        </View>

        <Text style={styles.label}>Login: </Text>
        <TextInput
          placeholder={'Login'}
          style={styles.input}
          value={data.login}
        />

        <ButtonGroup/>
      </View>
    </ScrollView>
  );
}