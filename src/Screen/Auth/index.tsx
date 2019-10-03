import * as React from 'react';
import { AsyncStorage, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}
interface State {}

export default class Auth extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>Auth</Text>
        <Button title="Login" onPress={this._login} />
      </Container>
    );
  }

  _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    this.props.navigation.navigate('MainTab');
  };
}
