import React from 'react';
import { View, Text } from 'react-native';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}
