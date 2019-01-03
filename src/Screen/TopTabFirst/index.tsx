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

export default class TopTapFirst extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>TopTabFirst Screen</Text>
        <Button title="Show Detail in Tab" onPress={this._showDetail} />
        <Button title="Show Full Size Detail" onPress={this._showFullDetail} />
        <Button
          title="navigate second bottom tab"
          onPress={this._navigateSecondBottomTab}
        />
        <Button title="Logout" onPress={this._logout} />
      </Container>
    );
  }
  private _showDetail = (): void => {
    this.props.navigation.navigate('Detail');
  };

  private _showFullDetail = (): void => {
    this.props.navigation.navigate('FullDetail');
  };

  private _logout = (): void => {
    AsyncStorage.removeItem('userToken');
    this.props.navigation.navigate('Auth');
  };
  private _navigateSecondBottomTab = (): void => {
    this.props.navigation.navigate('SecondTab');
  };
}
