import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { PageLoader } from '../Components/PageLoader';
export const HomeScreen = () => {


    const [appToken, setAppToken] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        retrieveData()
        if (appToken) {

            fetchHomeData()
        }
    }, [appToken])


    const retrieveData = async () => {
        try {
            const storedData = await SecureStore.getItemAsync('appToken');
            if (storedData !== null) {
                setAppToken(storedData)

                // setLoading(false)
            } else {
                // setLoading(false)
            }
        } catch (error) {
            // setLoading(false)
        }
    };

    const fetchHomeData = async () => {

        setLoading(true)

        try {

            const response = await axios.get('https://app-console.finocrm.in/api/v2/get-home-data', {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            });


            if (response.data.status === "success") {
                setLoading(false)
            }



        } catch (error) {

            if (error.response.status === 401) navigation.push("login")
        }
    }

    if (loading) {
        return (<PageLoader />);
    }

    return (
        <View style={styles.container}>
            <Text>HomeScreen {appToken}</Text>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});