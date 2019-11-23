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
import reducer from './src/store/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen
}, {initialRouteName: 'Home'});

const Container = createAppContainer(RootStack);


export default class App extends React.PureComponent {
  render(){
    return(
      <Provider store={store}>
        <Container/>
      </Provider>
    )
  }
}
