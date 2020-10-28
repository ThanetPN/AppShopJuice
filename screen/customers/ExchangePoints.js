import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

import { FilledButton } from '../../components/FilledButton';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
const CircleButton = props => (
    <TouchableOpacity
        style={{
            margin: props.margin,
            height: props.size,
            width: props.size,
            backgroundColor: props.color,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: props.size * 2,
        }}
        onPress={props.onPress}>
        <Text style={{ color: props.textColor, fontSize: props.fontSize }}>
            {props.text}
        </Text>
    </TouchableOpacity>
);
export const ExchangePoints = ({ navigation }) => {

    return (
        <ScreenContainer>
            <Text>ชื่อร้าน: </Text>
            <Text>สินค้า: </Text>
            <CircleButton
                text="รูปภาพ"
                size={200}
                color="#9FC9FB"
                textColor="white"
                fontSize={20}
                margin={10}
            />
            <FilledButton
                title={'แลก'}
                style={styles.loginButton}
                onPress={() => navigation.toggleDrawer()}
            />
            <FilledButton
                title={'Drawer'}
                style={styles.loginButton}
                onPress={() => navigation.toggleDrawer()}
            />
        </ScreenContainer>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 30,
        fontFamily: "SemiBold",
        alignSelf: "center",
    },
    loginButton: {
        marginVertical: 10,
    },
});