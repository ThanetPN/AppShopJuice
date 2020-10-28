import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

import { AuthContext } from "../../context";
import { FilledButton } from '../../components/FilledButton';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);
export const DetailShops = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);

    return (
        <ScreenContainer>
            
            <Text>ชื่อร้าน: </Text>
            <Text>ที่ตั้ง: </Text>
            <FilledButton
                title={'สร้างอีเว้น'}
                style={styles.loginButton}
                onPress={() => navigation.navigate('CreateEvents')}
            />
            <FilledButton
                title={'ตรวจส่วนลด'}
                style={styles.loginButton}
                onPress={() => navigation.navigate('CheckDiscounts')}
            />
            <FilledButton
                title={'Scan QR Code'}
                style={styles.loginButton}
                onPress={() => navigation.navigate('ScanQRCode')}
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