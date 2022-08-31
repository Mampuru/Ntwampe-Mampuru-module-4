import React, { Component } from 'react';
import { Pressable, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';

const Picture = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Text style={styles.baseText}>
                Picture View
            </Text>

            <Pressable
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('#')}>
                <Text style={styles.buttonTextStyle}>Take Picture</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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

export default Picture; 