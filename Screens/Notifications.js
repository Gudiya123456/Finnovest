import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import NotificationCard from '../Components/NotificationCard'
import { StatusBar } from 'expo-status-bar';
import HTML from 'react-native-render-html';
export default function Notifications({ navigation }) {

    const htmlContent = '<p style="color:red">This is some <strong style="color:green">HTML</strong> content.</p>';

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Coming Soon',
            time: "1 min",
            message: "You can see your latest notifications here",
            image: require("../assets/fav-icon.png")
        },
        // {
        //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        //     title: 'Exist Call',
        //     time: "10 min",
        //     message: "Exist Call Sonato Solutions Pvt Ltd",
        //     image: require("../assets/images/icici.png")
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
        //     title: 'Target 1 Done',
        //     time: "30 min",
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        //     image: require("../assets/images/infosys.png")
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145sss',
        //     title: 'Fire Call',
        //     time: "40 min",
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        //     image: require("../assets/images/hdfc.png")
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-try79',
        //     title: 'Stop Lose Triggered',
        //     time: "1h",
        //     image: require("../assets/images/infosys.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-353454',
        //     title: 'Buy Now',
        //     time: "3h",
        //     image: require("../assets/images/icici.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-3546567',
        //     title: 'Target 2 Done',
        //     time: "5h",
        //     image: require("../assets/images/itc.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-155',
        //     title: 'Sell Now',
        //     time: "11h",
        //     image: require("../assets/images/infosys.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },

        // {
        //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
        //     title: 'Book Your Profite',
        //     time: "1 min",
        //     image: require("../assets/images/itc.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
        //     title: 'Exist Call',
        //     time: "10 min",
        //     image: require("../assets/images/icici.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145571e29d723',
        //     title: 'Target 1 Done',
        //     time: "30 min",
        //     image: require("../assets/images/infosys.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145sss3',
        //     title: 'Fire Call',
        //     time: "40 min",
        //     image: require("../assets/images/hdfc.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-try793',
        //     title: 'Stop Lose Triggered',
        //     time: "1h",
        //     image: require("../assets/images/infosys.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-3534543',
        //     title: 'Buy Now',
        //     time: "3h",
        //     image: require("../assets/images/icici.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-35465673',
        //     title: 'Target 2 Done',
        //     time: "5h",
        //     image: require("../assets/images/itc.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-1553',
        //     title: 'Sell Now',
        //     time: "11h",
        //     image: require("../assets/images/infosys.png"),
        //     message: " Lorem ipsum dolor sit amet consectetur ",
        // },
    ];

    const Item = ({ item }) => (
        <View style={styles.item}>
            <View style={{ flex: 1 }}>
                <Text style={styles.imageContainer}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                </Text>
            </View>


            <View style={{ flex: 8, marginHorizontal: 10, }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.message}>{item.message}</Text>
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.time}> {item.time} aa</Text>
            </View>
            {/* <Text style={styles.title}>{title}</Text> */}
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />



        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#fff"
    },
    item: {
        // backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#d9d9d9",
        flexDirection: "row"
    },
    title: {
        fontSize: 16,
        fontWeight: "600"
    },

    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        resizeMode: "cover",
        width: 30,
        height: 30,
    },
    message: {
        fontSize: 12,
        fontWeight: "500",
        color: "#004d00"
    },
    time: {
        textAlign: "right",
        fontSize: 10,
        color: "gray"
    }
});
