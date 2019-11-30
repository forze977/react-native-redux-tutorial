/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screen/home';
import SecondScreen from './src/screen/second';

import { Provider } from 'react-redux';

import configureStore from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const {store, persister} = configureStore();


const RootStack = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen
}, {initialRouteName: 'Home'});

const Container = createAppContainer(RootStack);


export default class App extends React.PureComponent {
  render(){
    return(
      <Provider store={store}>
        <PersistGate persistor={persister}>
        <Container/>
        </PersistGate>
      </Provider>
    )
  }
}
