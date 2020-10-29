import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert, Image } from "react-native";

import { AuthContext } from "../../context";
import { FilledButton } from '../../components/FilledButton';


export const DetailShops = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />
            <Text style={styles.TextLayout}>ชื่อร้าน: </Text>
            <Text style={styles.TextLayout}>ที่ตั้ง: </Text>
            <View style={styles.buttonLayout}>
                <Button color="#71FBB9" title="สร้างอีเว้น"></Button>
            </View>
            <View style={styles.buttonLayout}>
                <Button color="#9FC9FB" title="ตรวจส่วนลด"></Button>
            </View>
            <View style={styles.buttonLayout}>
                <Button color="#F8E53B" title="Scan QR Code" onPress={() => navigation.navigate('ScanQRCode')}></Button>
            </View>

            <FilledButton
                title={'Drawer'}
                style={styles.loginButton}
                onPress={() => navigation.toggleDrawer()}
            />
        </View>
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
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
    },

    buttonLayout: {
        width: '50%',
        flexDirection: 'column',
        margin: 4,
        padding: 4,
        borderRadius: 50,
    },
    TextLayout:{
        backgroundColor: '#fff',
        width: '80%',
        margin:4,
        padding: 10,
        borderRadius: 8,
        color: 'black',
        borderWidth: 1,
    }
});