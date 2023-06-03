import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import VeterinaryOptions from './VeterinaryOptions';
import Hygiene from './Hygiene';
import Vaccine from './Vaccine';
import Medication from './Medication';

import api from './../../service/api';

export default function Services(props){

  const [vetServices, setVetServices] = useState();
  const [higyeneServ, setHigyeneServ] = useState();

  const getServices = async () => {
    const response = await api.get('/funcionarios');
    let services = response.data;

    let vet = services.filter((obj) => {
      return obj.servico.tipo === "Veterinário";
    });
    setVetServices(vet);

    let higyene = services.filter((obj) => {
      return obj.servico.tipo === "Higiene";
    });
    setHigyeneServ(higyene);
  };

  useEffect(() => {
    getServices();
  }, []);
  
  return (
     <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
        {/*Header*/}
        <View style={styles.header}>
          <Text style={styles.paragraph}>{props.route.params === 'vet' ? 'Veterinário' : props.route.params === 'hygiene' ? 'Higiene' : props.route.params === 'vaccine' ? 'Vacina' : 'Medicação'}</Text>
          <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}  onPress={() => console.log('add new')}>
            <FontAwesome name="plus" size={15} color="#ffffff"/>
          </TouchableOpacity>
        </View>
        </View>

        {/*Categories*/}
        {props.route.params === 'vet' ? 
          <VeterinaryOptions services={vetServices}/> 
          : props.route.params === 'hygiene' ?
          <Hygiene services={higyeneServ}/>
          : props.route.params === 'vaccine' ?
          <Vaccine/>
          : <Medication/>
        }
        
     </ScrollView>
  )
}