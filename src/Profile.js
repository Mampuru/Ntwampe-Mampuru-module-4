import React, { Component } from 'react';
import { Pressable, Dimensions, Text, StyleSheet, SafeAreaView, TextInput,View,Image } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
        <Text style={styles.baseText}>
            Profile
        </Text>
        <View>
            <Image source={require("../assets/user.png")} style={{ width: 100, height: 100 }}/>
        </View>
        <TextInput
                style={styles.input}
                placeholder="Lebo"
            />
            <TextInput
                style={styles.input}
                placeholder="Lebo@gmail.com"
            />
            <TextInput
                style={styles.input}
                placeholder="********"
            />
            <TextInput
                style={styles.input}
                placeholder="********"
            />
        <Pressable
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('#')}>
                <Text style={styles.buttonTextStyle}>Save</Text>
            </Pressable>
    </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    baseText: {
        fontSize: 50,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    screenContainer: {
        paddingTop: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonStyle: {
        height: 54,
        width: '75%',
        marginTop: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff8c1a',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#fdfdfd',
        fontWeight: '700',
    },
});

export default Profile; 