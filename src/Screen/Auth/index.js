import React from 'react';
import { AsyncStorage, View, Text, Button } from 'react-native';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Auth</Text>
        <Button title="Login" onPress={this._login} />
      </View>
    );
  }

  _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    this.props.navigation.navigate('MainTab');
  };
}
