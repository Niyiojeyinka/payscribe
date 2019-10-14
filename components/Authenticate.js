import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import w3 from '../assets/styles/w3Native';
import {Image} from 'native-base';
import Dashboard from './Dashboard';
import Front from './Front';

class Splash extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/front.png')}
        style={[w3.Screen, w3.Blue]}>
        <View style={[w3.RowColumn, w3.Padding]}>
          <View style={[w3.PaddingJumbo]}>
            <Text>g</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default class Authenticate extends Component {
  constructor(props) {
    super(props);

    //check for authentication here

    this.state = {currentScreen: 'Splash'};
    setTimeout(() => {
      //screen returned from authentication
      //this.setState({ currentScreen: "s" });
    }, 3000);
  }

  render() {
    const {currentScreen} = this.state;
    if (currentScreen == 'Splash') {
      return <Front />;
    } else if (currentScreen == 'Dashboard') {
      return <Dashboard />;
    } else {
      return <Front />;
    }
  }
}
/*
The first screen on launch

In Authenticate check whether user is logged in or not
if not redirect to Front Component
else
Redirect to dashboard
*/
