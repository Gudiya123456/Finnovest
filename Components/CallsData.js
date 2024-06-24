import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'


const Data = () => {
    return (
        <View style={styles.contentContainer}>
            <View style={{ flex: 2 }} >
                <Text style={styles.message}>Stop loss triggered</Text>
                <Text style={styles.description}>Small Description about action</Text>
            </View>

            <View style={{
                flex: 1,
                justifyContent: "center"
            }} >
                <Text style={styles.time}>10:30:15 am</Text>
            </View>
        </View>
    )
}
export const CallsData = () => {

    return (
        <View >

            <View style={styles.header}>
                <View style={{ flex: 2 }} >
                    <Text style={styles.headerTitleLeft}>Action</Text>
                </View>

                <View style={{ flex: 1 }} >
                    <Text style={styles.headerTitleRight}>Date</Text>
                </View>
            </View>

            <Data />
            <Data />
            <Data />


        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: "gray",
        borderRadius: 5,
        marginBottom: 5
    },
    headerTitleLeft: {
        color: "#fff",
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "600"
    },
    headerTitleRight: {
        color: "#fff",
        textAlign: "right",
        marginRight: 10,
        fontWeight: "600"
    },
    contentContainer: {
        flexDirection: 'row',
        backgroundColor: "#4d4d4d",
        marginTop: 6,
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 2,
        // borderBottomColor: "gray",
        borderRadius: 5
    },
    message: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
        marginLeft: 5,
    },
    time: {
        color: "#d9d9d9",
        fontSize: 14,
        fontWeight: "600",
        marginRight: 5,
        textAlign: "right",

    },
    description: {
        color: "#fff",
        fontSize: 12,
        // fontWeight: "600",
        marginLeft: 5,
    }


});

export default CallsData