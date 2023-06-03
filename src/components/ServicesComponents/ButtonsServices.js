import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function ButtonsServices(){
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('update')}>
        <FontAwesome name="pen" size={20} color="green"/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log('delete')}>
        <FontAwesome name="trash-alt" size={20} color="red"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'col',
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    alignItems:'center', 
    justifyContent: 'center'
  }
})