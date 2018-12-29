import React from 'react';
import { AsyncStorage, View, Text, Button } from 'react-native';

export default class FirstTab extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.navigation.setParams({ logout: this._logout });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>First Tab</Text>
        <Button title="Show Detail in Tab" onPress={this._showDetail} />
        <Button title="Show Full Size Detail" onPress={this._showFullDetail} />
        <Button title="Logout" onPress={this._logout} />
      </View>
    );
  }

  _showDetail = () => {
    this.props.navigation.navigate('Detail');
  };

  _showFullDetail = () => {
    this.props.navigation.navigate('FullDetail');
  };

  _logout = () => {
    AsyncStorage.removeItem('userToken');
    this.props.navigation.navigate('Auth');
  };
}
