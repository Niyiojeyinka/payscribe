import React, {Component} from 'react';
import {View, Image, ImageBackground, Dimensions} from 'react-native';
import w3 from '../assets/styles/w3Native';
import {Button, Text} from 'native-base';
import {withNavigation} from 'react-navigation';

class Front extends Component {
  constructor(props) {
    super(props);
  }
  //hide header here
  static navigationOptions = {
    title: '',
    headerStyle: {
      display: 'none',
    },
  };
  render() {
    //  const resizeMode ="center";
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
      <View style={[w3.Screen]}>
        <View style={[{flex: 2}]}>
          <ImageBackground
            source={require('../assets/images/front.png')}
            style={[w3.White, {width: windowWidth, height: windowHeight / 3}]}>
            <View style={[{flex: 1}, w3.Center, w3.Padding]}>
              <Image
                source={require('../assets/images/payscribe_logo.png')}
                style={[{width: 153, height: 50}]}></Image>
            </View>
          </ImageBackground>
        </View>
        <View style={[{flex: 2, flexDirection: 'row'}]}>
          <View style={[{flex: 4}, w3.Padding, w3.MarginBottom]}>
            <Text>{'\n\n'}</Text>
            <Text style={[{opacity: 0.52}, w3.Bold, w3.XxLarge]}>
              Pay With Ease
            </Text>
            <Text>{'\n'}</Text>
            <Text style={[{opacity: 0.52}, w3.Medium]}>
              Buy airtime ,pay your TV Subscription ,pay your bill with
              payscribe
            </Text>
          </View>
        </View>
        <Button
          rounded
          style={[
            {marginBottom: 32, width: windowWidth - windowWidth * (20 / 100)},
            w3.Center,
            w3.Blue,
          ]}>
          <Text>Get Started</Text>
        </Button>
      </View>
    );
  }
}
export default withNavigation(Front);
