// MyComponent.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.state.count}</Text>
        <Button title="Increase Count" onPress={this.increaseCount} />
      </View>
    );
  }
}

export default MyState;
