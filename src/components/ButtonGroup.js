import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function ButtonGroup(){
  return (
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
  )
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
})