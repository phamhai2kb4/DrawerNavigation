import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Header from '../components/Header'
export default function Messenger({navigation}){
    return(
        <View style={styles.container}>
            {/* <Header
                onPress={() => { navigation.openDrawer() }}
                title="Messages"
            /> */}
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Messages</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,  
    }
})