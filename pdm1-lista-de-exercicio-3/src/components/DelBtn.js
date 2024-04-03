import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function DelBtn (props) {
  return (
    <View style={styles.del}>
       <TouchableOpacity onPress={props.onPress}>
        <MaterialCommunityIcons name="delete" size={25}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  del:{

    justifyContent: 'space-between',
  }

});