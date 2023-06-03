import * as React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import New from './src/pages/New';
import Details from './src/pages/Details';
import UserProfile from './src/pages/UserProfile';
import Schedule from './src/pages/Schedule';
import Services from './src/pages/Services';
import PetProfile from './src/pages/PetProfile';
import EditUserProfile from './src/pages/EditUserProfile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Inicío: {
    name: 'home'
  },
  Agenda: {
    name: 'calendar'
  },
  Perfil: {
    name: 'person'
  },
}

function Tabs(){
  return (
    <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={25} />
          },
          headerShown: false,
          tabBarShowLabel: false,
        })}
        tabBarOptions={{
          activeTintColor: '#274192',
          inactiveTintColor: 'lightgray',  
          labelStyle: {marginBottom: 5}
        }}
      >
        <Tab.Screen name="Inicío" component={Home}></Tab.Screen>
        <Tab.Screen name="Agenda" component={Schedule}></Tab.Screen>
        <Tab.Screen name="Perfil" component={UserProfile}></Tab.Screen>
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{  title:'Voltar', headerShown: false }} />
        <Stack.Screen name="New" component={New} options={{ title:'Novo agendamento', headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ title:'', headerShown: true }}/>
        <Stack.Screen name="Services" component={Services} options={{ title:'Serviços', headerShown: true }}/>
        <Stack.Screen name="PetProfile" component={PetProfile} options={{ title:'Perfil do Pet', headerShown: true }}/>
        <Stack.Screen name="EditUserProfile" component={EditUserProfile} options={{ title:'Editar conta', headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}