import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {}
interface State {}

export default class Detail extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>Detail Screen</Text>
      </Container>
    );
  }
}
