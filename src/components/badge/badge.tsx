import * as React from 'react';
import {
    TouchableOpacity,
    View, 
    StyleSheet
} from 'react-native'

interface BadgeProps {
    children: React.ReactNode
}
 
export const Badge: React.FunctionComponent<BadgeProps> = ({children}) => {
    return (
        <TouchableOpacity style={styles.container}>
            {children}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        borderRadius: 50,
        margin: 5,
        backgroundColor:'#CCF5AC'
    }
})