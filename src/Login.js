import React, { Component } from 'react';
import { View,Pressable, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Text style={styles.baseText}>
                Login
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <Pressable
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.buttonTextStyle}>Login</Text>
            </Pressable>

            <Pressable
                style={styles.outlinebuttonStyle}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.outlinebuttonTextStyle}>Sign Up</Text>
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
        paddingTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    outlinebuttonStyle: {
        height: 54,
        width: '75%',
        marginTop: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor:'#ff8c1a', 
        borderWidth: 2,
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    outlinebuttonTextStyle: {
        color: '#ff8c1a',
        fontWeight: '700',
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

export default Login; 
