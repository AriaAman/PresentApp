import React from 'react';
import style from './styles/global';

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() =>{
    console.log("useEffect !")
  }, [count]);

  const onPressHandler = () => {
    setCount(count+1);
    console.log("Clique sur le bouton !", count);
  };

  return (<>
    <View>
        <Text style={style.text}> Hello World !</Text>
    </View>
    <View>
        <TouchableOpacity onPress={onPressHandler}>
          <Text>Cliquez ici ! {count}</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default App;
