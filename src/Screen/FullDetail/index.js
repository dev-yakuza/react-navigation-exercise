import React from 'react';
import { View, Text } from 'react-native';

export default class FullDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FullDetail Screen</Text>
      </View>
    );
  }
}
