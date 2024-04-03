import { View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';




export default function AddBtn (props) {
  return (
    <View>
       <TouchableOpacity onPress={props.onPress}>
          <Entypo name="circle-with-plus" size={28} />
        </TouchableOpacity>
    </View>
  );
}
