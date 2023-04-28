import * as React from 'react';
import { View,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// SCREEN
import Home from './navigation/screens/Home'
import Chuck from './navigation/screens/Chuck'
import Register from './navigation/screens/Register'
import Login from './navigation/screens/Login'
// Screen Name 
const homeName = 'Home';
const chuckName = 'Chuck';
const registerName = 'Register';
const loginName = 'Login'

const Tab = createBottomTabNavigator()

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
          
                      } else if (rn === chuckName) {
                        iconName = focused ? 'list' : 'list-outline';
          
                      } else if (rn === registerName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                      }
          
                      // You can return any component that you like here!
                      // return <Icon name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 12 },
                style: { padding: 10, height: 70}
              }}> 

            <Tab.Screen name={homeName} component={Home} />
            <Tab.Screen name={chuckName} component={Chuck} />
            <Tab.Screen name={registerName} component={Register} />
            <Tab.Screen name={loginName} component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}