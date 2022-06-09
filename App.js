import 'react-native-gesture-handler';
import React from 'react';

import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Create a component
const App = () => {
  const { headerStyles, headerTitleStyle } = styles;

  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="albumList"
        component={AlbumList}
        options={{ title: 'Albums', headerStyle: headerStyles, headerTitleStyle: headerTitleStyle }}
      />
      <Stack.Screen
        name="photoList"
        component={PhotoList}
        options={{ title: 'Photos', headerStyle: headerStyles, headerTitleStyle: headerTitleStyle } }
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = {
  headerStyles: {
    backgroundColor: '#121212',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#6CC5FF',
  }
};

export default App;
