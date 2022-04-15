import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Messenger, Contact } from '../screens/index'

import Animated from 'react-native-reanimated'

const Stack = createNativeStackNavigator()

const Screens = ({style}) => {
    return (
        <Animated.View style={[{flex: 1}, style ]}>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Messenger" component={Messenger} />
                <Stack.Screen name="Contact" component={Contact} />
            </Stack.Navigator>
        </Animated.View>
    )
}
export default Screens




