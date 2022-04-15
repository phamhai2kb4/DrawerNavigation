import React, { useState, useRef } from 'react'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    useDrawerProgress
} from '@react-navigation/drawer'
import Screens from './AuthStack'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator()

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                height: 120,
                justifyContent: "center",
                margin: 20
            }}>
                <View style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: "green",
                    justifyContent: "center",
                    alignItems: "center"

                }}>
                    <Image source={require("../../assets/favicon.png")} />
                </View>

                <Text style={{
                    fontSize: 24,
                }}>Test</Text>
                <Text style={{ fontSize: 12 }}>Test @gmail.com</Text>
            </View>
            <DrawerItem
                label="Home"
                labelStyle={{
                    marginLeft: -16
                }}
                onPress={() => { props.navigation.navigate('Home') }}
                icon={() => <Icon name='home' size={16} />}
            />
            <DrawerItem
                label="Messages"
                labelStyle={{
                    marginLeft: -16
                }}
                onPress={() => { props.navigation.navigate('Messenger') }}
                icon={() => <Icon name='comment' size={16} />}
            />
            <DrawerItem
                label="Contact"
                labelStyle={{
                    marginLeft: -16
                }}
                onPress={() => { props.navigation.navigate('Contact') }}
                icon={() => <Icon name='phone' size={16} />}
            />
        </DrawerContentScrollView>
    )
}

export default () => {
    const [progress, setProgress] = useState(new Animated.Value(0))
    setProgress = useDrawerProgress();
    
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });

    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 20],
    });

    const createStyles = {borderRadius ,transform: [{ scale }] };

    return (
        <Drawer.Navigator
            drawerType="slide"
            screenOptions={{
                headerTitle: "",
                headerTransparent: true,
            }}
            initialRouteName='Home'
            drawerContent={(props) => {
                setProgress(props.progress)
                return <DrawerContent {...props} />
            }}>
            <Drawer.Screen name="Screens" >
                {(props) => <Screens {...props} style={createStyles} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}