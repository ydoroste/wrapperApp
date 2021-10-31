import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BoxItem} from '.';
interface BoxWrapperProps {
  items?: any;
}

export const BoxWrapper: React.FunctionComponent<BoxWrapperProps> = ({
  items,
}) => {
    let list = []
    items.forEach(item=>{
        for (var i = 0; i< item.count ; i++){
            list=[...list , item]
        }
    })
  return (
    <View style={styles.container}>
      {list.map((item, key) => {
        // for (var i = 0; i <=item.count; i++) {
          return (
            <BoxItem type={item.value} key = {key}>
              <Text>{`${key}`}</Text>
            </BoxItem>
          );
        // }
      })}
      {/* <BoxItem type='xl'>
                <Text>spot1</Text>
            </BoxItem>
            <BoxItem type='l'>
                <Text>spot1</Text>
            </BoxItem>
            <BoxItem type='sm'>
                <Text>spot1</Text>
            </BoxItem>
            <BoxItem type='sm'>
                <Text>spot1</Text>
            </BoxItem> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 200,
    borderWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf:'center',
    marginTop: 40
  },
});
