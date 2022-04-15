import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Header from '../components/Header'
export default function Contact({navigation}){
    return(
        <View style={styles.container}>
            {/* <Header
                onPress={() => { navigation.openDrawer() }}
                title="Contact"
            /> */}
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Contact</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,  
    }
})