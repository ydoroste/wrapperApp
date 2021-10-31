import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BoxWrapper, DropDown, Badge} from './src/components';
import Fontisto from 'react-native-vector-icons/Fontisto';
interface AppProps {}
const mapindex = {
  xl: 2,
  l: 1,
  sm: 0.5,
};
const items = [
  {label: 'xl', weight: 2, value: 'xl'},
  {label: 'l', weight: 1, value: 'l'},
  {label: 'sm', weight: 0.5, value: 'sm'},
];

const App: React.FunctionComponent<AppProps> = () => {
  const [state, setState] = useState({
    itemList: [],
    weight: 0,
  });

  const onSelectitem = (value: any) => {
    if (state.weight + mapindex[value] > 4) {
      return;
    }
    const foundIndex = state.itemList.findIndex(item => item.value == value);
    if (foundIndex !== -1) {
      const newItemCount = state.itemList[foundIndex].count + 1;
      const newItemList = state.itemList;
      newItemList[foundIndex] = {value, count: newItemCount};
      setState({itemList: newItemList, weight: state.weight + mapindex[value]});
    } else {
      const newItemlist = [...state.itemList, {value, count: 1}];
      setState({
        itemList: newItemlist,
        weight: state.weight + mapindex[value],
      });
    }
  };
  const handleRemoveItem = value => {
    const foundIndex = state.itemList.findIndex(item => item.value == value);
    const newWeight =
      state.weight - mapindex[value] * state.itemList[foundIndex].count;

    const newItemList = state.itemList;
    newItemList.splice(foundIndex, 1);
    setState({
      itemList: newItemList,
      weight: newWeight,
    });
  };
  return (
    <View style={styles.container}>
      <DropDown items={items} onChange={onSelectitem} />
      <View style={styles.row}>
        {state.itemList.map((item, index) => {
          return (
            <Badge>
              <View style={styles.row}>
                <Text>
                  {item.count > 1 && item.count}
                  {item.value}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleRemoveItem(item.value)}>
                  <Fontisto name="close" />
                </TouchableOpacity>
              </View>
            </Badge>
          );
        })}
      </View>
      <BoxWrapper items={state.itemList} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 5,
  },
});

export default App;
