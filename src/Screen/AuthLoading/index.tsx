import * as React from 'react';
import { AsyncStorage, Text } from 'react-native';
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

export default class AuthLoadingScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    setTimeout(() => {
      this._bootstrapAsync();
    }, 1000);
  }

  render() {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  private _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'MainTab' : 'Auth');
  };
}
