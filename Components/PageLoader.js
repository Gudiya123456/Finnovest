import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native';
export const PageLoader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#007AFF" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});