import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Modal} from '../../components';
interface DropDownProps {
  items: any;
  onChange?: any;
}

export const DropDown: React.FunctionComponent<DropDownProps> = ({
  items,
  onChange,
}) => {
  const [modal, setModal] = React.useState(false);

  const handleSelectItem= item=>{
    onChange(item.value)
    setModal(false)
  }
  return (
    <View>
      <TouchableOpacity onPress={()=> setModal(true)}><Text>select item</Text></TouchableOpacity>
      <Modal visible={modal} onClose={() => setModal(false)}>
        <View style={styles.box}>
          {items.map(item => (
            <TouchableOpacity style={styles.item} onPress={()=> handleSelectItem(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  item:{
    paddingVertical: 10
  }
});
