import React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const Header = (props) => {
    const {onPress, title} = props
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    height: 60,
                    width: 60,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Icon name="bars" size={25} />
            </TouchableOpacity>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})