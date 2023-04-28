import React, { useState } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { login } from '../../services/students'
import Home from './Home'

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const onPressHandler = async (event) => {
        console.log("tests")
        
        const res = await login({
            email,
            password
        });
        console.log("onPress",res)
        navigation.navigate(Home)
    }
  return (
    <View>
        <Text>Login</Text>
        <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            name="email"
            placeholder="Votre adresse mail"
        ></TextInput>
        <TextInput
            onChangeText={setPassword}
            secureTextEntry={true}
            value={password}
            name="password"
            placeholder="Votre mots de passe"
        ></TextInput>
    <TouchableOpacity onPress={onPressHandler}>
        <Text>Envoyer</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Login;
