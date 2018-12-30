import * as React from 'react';
import { AsyncStorage, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  navigation: any;
}
interface State {}

export default class FirstTab extends React.Component<Props, State> {
  componentDidMount() {
    this.props.navigation.setParams({ logout: this._logout });
  }

  render() {
    return (
      <Container>
        <Text>First Tab</Text>
        <Button title="Show Detail in Tab" onPress={this._showDetail} />
        <Button title="Show Full Size Detail" onPress={this._showFullDetail} />
        <Button title="Logout" onPress={this._logout} />
      </Container>
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
