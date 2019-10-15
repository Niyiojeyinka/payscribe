import React, {Component} from 'react';
import {
  View,
  TextInput,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import w3 from '../assets/styles/w3Native';
import {Button, Text} from 'native-base';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {
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
        <View style={[{flex: 1}]}>
          <ImageBackground
            source={require('../assets/images/front.png')}
            style={[w3.White, {width: windowWidth, height: windowHeight / 3}]}>
            <View style={[{flex: 1}, w3.Center, w3.Padding]}>
              <Text
                style={[{marginBottom: 48}, w3.Bold, w3.TextWhite, w3.XxLarge]}>
                Create Account
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View
          style={[
            {
              flex: 4,
              flexDirection: 'column',
              // marginTop: -50,
              //position: 'absolute',
            },
          ]}>
          <View style={[{flex: 1, flexDirection: 'column'}]}></View>

          <View style={[{flex: 4, flexDirection: 'column'}]}>
            <ScrollView>
              <View style={[{flex: 1, flexDirection: 'column'}]}>
                <Icon
                  name={'user'}
                  size={24}
                  color={'rgba(0,0,0,0.7)'}
                  style={{position: 'absolute', top: 25, left: 35}}
                />
                <TextInput
                  style={[
                    {
                      height: 45,
                      width: windowWidth - windowWidth * (10 / 100),
                      paddingLeft: 48,
                      // backgroundColor: 'rgba(0,0,0,0.35)',
                      color: 'rgba(0,0,0,0.7)',
                    },
                    w3.BorderBottom,
                    w3.RoundJumbo,
                    w3.Margin,
                  ]}
                  placeholder="Name"
                  placeholderTextColor="rgba(0,0,0,0.7)"
                  underlineColorAndroid="transparent"
                />
              </View>

              <View style={[{flex: 1, flexDirection: 'column'}]}>
                <Icon
                  name={'envelope-o'}
                  size={24}
                  color={'rgba(0,0,0,0.7)'}
                  style={{position: 'absolute', top: 25, left: 35}}
                />
                <TextInput
                  style={[
                    {
                      height: 45,
                      width: windowWidth - windowWidth * (10 / 100),
                      paddingLeft: 48,
                      // backgroundColor: 'rgba(0,0,0,0.35)',
                      color: 'rgba(0,0,0,0.7)',
                    },
                    w3.BorderBottom,
                    w3.RoundJumbo,
                    w3.Margin,
                  ]}
                  placeholder="Email Address"
                  placeholderTextColor="rgba(0,0,0,0.7)"
                  underlineColorAndroid="transparent"
                />
              </View>

              <View style={[{flex: 1, flexDirection: 'column'}]}>
                <Icon
                  name={'lock'}
                  size={24}
                  color={'rgba(0,0,0,0.7)'}
                  style={{position: 'absolute', top: 25, left: 35}}
                />
                <TextInput
                  style={[
                    {
                      height: 45,
                      width: windowWidth - windowWidth * (10 / 100),
                      paddingLeft: 48,
                      // backgroundColor: 'rgba(0,0,0,0.35)',
                      color: 'rgba(0,0,0,0.7)',
                    },
                    w3.BorderBottom,
                    w3.RoundJumbo,
                    w3.Margin,
                  ]}
                  placeholder="Password"
                  placeholderTextColor="rgba(0,0,0,0.7)"
                  underlineColorAndroid="transparent"
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={[{flex: 1}]}>
          <View style={[{flex: 1, flexDirection: 'row'}]}>
            <Text
              onPress={() => {
                // alert('hi');
                this.props.navigation.navigate('Login');
              }}
              style={[
                w3.TextBlue,
                w3.Center,
                w3.Bold,
                w3.Large,
                {width: 120, position: 'absolute', top: 50, left: -150},
              ]}>
              Sign in
            </Text>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}
              style={[
                w3.Blue,
                w3.Center,
                {width: 45},
                {position: 'absolute', bottom: 30, right: -150},
              ]}
              rounded>
              <Icon
                name={'arrow-right'}
                size={24}
                color={'rgba(255,255,255,1)'}
              />
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
export default withNavigation(Register);
