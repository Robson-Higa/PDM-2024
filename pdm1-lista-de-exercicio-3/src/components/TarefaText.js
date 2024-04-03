import { View, Text, StyleSheet } from 'react-native';

export default function TarefaText(props) {
  return (
    <View  style={styles.itemText}>
      <Text>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 20,
   width: '80%'
  },
});
