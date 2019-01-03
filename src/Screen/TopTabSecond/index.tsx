import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {}
interface State {}

export default class TopTabSecond extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>TopTabSecond Screen</Text>
      </Container>
    );
  }
}
