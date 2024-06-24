import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FONTS, COLORS, SIZES, icons } from '../constants';
import { Default } from '../constants/theme'


export const DrawerScreenTitle = (props) => {


    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <Text style={styles.subHeaderTitle}>{props.subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        // marginTop: Default.fixPadding * 1,
        marginBottom: Default.fixPadding * 6,
        paddingHorizontal: 25,
        paddingBottom: 1,
        alignItems: "center"
    },
    headerTitle: {
        ...FONTS.h1,
        color: COLORS.white
    },
    subHeaderTitle: {
        ...FONTS.body3,
        color: COLORS.white,

    },
})
