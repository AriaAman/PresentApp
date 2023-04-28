import * as React from 'react';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';

import {getSessions} from '../../services/sessions.js'
 
export default function Home({navigation}){

    const [sessions, setSessions] = useState([]);

    useEffect(() =>{
        const getData = async () => {
            const res = await getSessions();
            console.log(res);
            setSessions(res);
        }
        getData();
    }, []);
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
            onPress={() => navigation.navigate('Home')}
            style={{ fontSize: 26, fontWeight: 'bold'}}>
            Home Screen 
        </Text>
        <Text>Liste des cours</Text>
        <View>
            {sessions.map((session) => <Text key={session._id}>
                {session.name}
            </Text>)}
        </View>
    </View>
    )
}
