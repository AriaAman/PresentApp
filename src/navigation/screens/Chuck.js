import React,  { useState } from 'react';
import { Text,View,TouchableOpacity,Button } from 'react-native';

const Chuck = ({navigation}) => {
  const [joke, setJoke] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chuck')}>
            <Text>Chuck Page</Text>
        </TouchableOpacity> */}

        <Button title="Get Joke" onPress={handleClick} />
          <Text>{joke}</Text>
    </View>




  )
}

export default Chuck;
