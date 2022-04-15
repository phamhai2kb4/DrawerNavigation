import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Header from '../components/Header'
export default function Home({navigation}){
    return (
        <View style={styles.container}>
            {/* <Header
                onPress={() => { navigation.openDrawer() }}
                title="Home"
            /> */}
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Home</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
    }
})