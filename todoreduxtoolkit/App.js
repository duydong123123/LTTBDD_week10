// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './store'; // Import store đã cấu hình
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{ title: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
