import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from "react";

dayjs.extend(relativeTime);

interface ContactListItemProps {
    user: any
}
const ContactListItem: React.FC<ContactListItemProps> = ({user}) => {

    return (
        <Pressable onPress={() => {
        }} style={styles.container}>
            <Image source={{uri: user.image}} style={styles.image}/>

            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>
                    {user.name}
                </Text>

                <Text numberOfLines={2} style={styles.subTitle}>
                    {user.status}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {},
    name: {
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'gray',
    },
});

export default ContactListItem;
