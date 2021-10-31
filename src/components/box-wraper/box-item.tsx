import * as React from 'react';
import {
    View, 
    StyleSheet
}from 'react-native'

interface BoxItemProps {
    children: React.ReactNode
    type: boxType
}
 
export const BoxItem: React.FunctionComponent<BoxItemProps> = ({type, children}) => {
    return (
        <View style={styles[type]}>
            {children}
        </View>
    );
}
const styles= StyleSheet.create({
    xl:{
        width: '100%',
        height:'50%',
        borderBottomWidth:1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems:'center',
    },
    l:{
        width: '100%',
        height:'25%',
        borderBottomWidth:1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems:'center',
    },
    sm:{
        width: '50%',
        height:'25%',
        borderBottomWidth:1,
        borderRightWidth:1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems:'center',
    }
})

type boxType = keyof typeof styles
