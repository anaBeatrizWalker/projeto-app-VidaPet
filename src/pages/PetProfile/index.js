import * as React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import ButtonGroup from './../../components/ButtonGroup.js';

export default function PetProfile(props){

  const pet = props.route.params;
  const petNina = require('./../../../assets/labradora-nina.jpg');
  const petAntonio = require('./../../../assets/siames-antonio.jpg');

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>    
      {/*Pet image*/}
      <View style={styles.pet}>
        <View style={{justifyContent: 'center', marginBottom: 10,}}>
          <Image style={styles.image} source={(pet.especie === 'Cachorro' ? petNina : petAntonio)}/>
          {/*<FontAwesome style={styles.petImage} name={pet.especie === 'Cachorro' ? 'dog' : 'cat'} size={50} color="black"/>*/}
        </View>
        <View>
          <View style={styles.petInfos}>
            <Text style={styles.petName}>{pet.nome}</Text>
          </View>
        </View>
      </View>

      {/*Pet profile*/}
      <View style={styles.petDetails}>
        <View style={styles.detail}>
          <View style={styles.detailRow}>
            <FontAwesome name={pet.especie === 'Cachorro' ? 'dog' : 'cat'} size={18} color="#F6511D"/>
          </View>
          <Text style={styles.detailText}>{pet.raça}</Text>
        </View>

        <View style={styles.detail}>
          <View style={styles.detailRow}>
            <FontAwesome name="venus-mars" size={18} color="#00A6ED"/>
          </View>
          <Text style={styles.detailText}>{pet.sexo}</Text>
        </View>

        <View style={styles.detail}>
          <View style={styles.detailRow}>
            <FontAwesome name="star" size={18} color="#FFB400"/>
          </View>
          <Text style={styles.detailText}>{pet.dataDeNascimento}</Text>
        </View>
      </View>

      <View style={styles.petDetails}>
        <Text style={styles.title}>Outros dados: </Text>

        <View style={styles.moreDetail}>
          <Text style={styles.titleDetail}>Peso: </Text>
          <Text style={styles.infoDetail}>{pet.peso}</Text>
        </View>

        <View style={styles.moreDetail}>
          <Text style={styles.titleDetail}>Pelagem: </Text>
          <Text style={styles.infoDetail}>{pet.pelagem}</Text>
        </View>

        <View style={styles.moreDetail}>
          <Text style={styles.titleDetail}>Porte: </Text>
          <Text style={styles.infoDetail}>{pet.porte}</Text>
        </View>
      </View>

      {/*Profile buttons*/}
      <ButtonGroup/>
    </ScrollView>
  )
}