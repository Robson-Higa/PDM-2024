import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import AddBtn from './src/components/AddBtn';
import DelBtn from './src/components/DelBtn';
import TarefaText from './src/components/TarefaText';

export default function App() {
  const [item, setItem] = useState('');
  const [tarefa, setTarefa] = useState([]);
  

  function adicionarTarefa() {
    if (item.trim() !== '') {
      setTarefa([...tarefa, { id: tarefa.length.toString(), text: item }]);
      setItem('');
    }
  }
  function deletarTarefa(id) {
    setTarefa(tarefa.filter((tarefa) => tarefa.id !== id));
  }

 

  const mostrarTarefa = ({ item }) => (
    <View style={styles.tarefa}>
      <TarefaText value={item.text} />
      <DelBtn onPress={() => deletarTarefa(item.id)} />
     
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={item == 0 ? '' : item}
          onChangeText={(v) => setItem(v)}
        />
        <AddBtn onPress={() => adicionarTarefa()} />
      </View>

      <FlatList
        data={tarefa}
        renderItem={mostrarTarefa}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    padding: 8,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 6,
    width: '90%',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
});
