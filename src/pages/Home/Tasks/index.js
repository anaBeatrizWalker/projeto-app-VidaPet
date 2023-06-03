import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Keyboard, Pressable } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import {styles} from './styles';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tasks.db");

export default function Task() {

  const [task, setTask] = useState('');
  const [listTasks, setListsTasks] = useState([]);

  useEffect(async () => {
      await createTable();
      await getTasks();
  }, [])


  const createTable = () => {
    db.transaction(transaction => {
      transaction.executeSql('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50))', [],
        (sql, res) => {
          console.log("Tabela criada com sucesso!");
        }, 
        error => {
          console.log("Erro ao criar tabela: " + error.message);
        }
      )
    })
  }

  const addTask = () => {
    Keyboard.dismiss();
    if(!task){
      alert('Insira uma tarefa!')
      return false;
    }
    db.transaction(transaction => {
      transaction.executeSql(
        'INSERT INTO tasks (name) VALUES (?)',
        [task],
        (sql, res) => {
          console.log(`Tarefa ${task} adicionada com sucesso!`);
          getTasks();
          setTask("");
        },
        error => {
          console.log("Erro ao inserir a tarefa: " + error.message);
        }
      )
    })
  }

  const getTasks = () => {
    db.transaction(transaction => {
      transaction.executeSql(
        'SELECT * FROM tasks ORDER BY id DESC',
        [],
        (sql, res) => {
          let leng = res.rows.length;
          if(leng > 0){
            let results = [];
            for(let i = 0; i < leng; i++){
              let item = res.rows.item(i);
              results.push({id: item.id, name: item.name});
            }
            setListsTasks(results);
          }
        },
        error => {
          console.log("Erro ao retornar as tarefas: " + error.message);
        }
      )
    })
  }

  function removeTask(item){
    const taskId = item.id;
    db.transaction(transaction => {
      transaction.executeSql(`DELETE FROM tasks WHERE id=(?)`, [taskId], (sql, res) => {
        console.log(`Tarefa de id ${taskId} excluida com sucesso!`);
        getTasks();

        error => {
          console.log("Erro ao excluir a tarefa: " + error.message);
        }
      })
    })
  }

 function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={18} color="white" />}
    </Pressable>
  );
 }

  const renderTask = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Text style={{ marginRight: 9 }}>{item.name}</Text>
        <View style={styles.itemButtons}>
          <Checkbox/>
          <TouchableOpacity onPress={() => removeTask(item)}>
            <FontAwesome name="trash-alt" size={18} color="red"/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Card>
        <FlatList key={t => t.id} data={listTasks} renderItem={renderTask}/>
      </Card>
      
     <View style={styles.formContainer}>
        <TextInput style={styles.inputs} placeholder="Digite o lembrete: " value={task} onChangeText={setTask}></TextInput>
        <TouchableOpacity style={styles.button}  onPress={addTask}>
          <FontAwesome name="plus" size={15} color="#ffffff"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}