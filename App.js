import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// component
import ScreensAnimated from './component/ToogleButton';
import List from './component/List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItem: null
    }
  }
  onItemPressed = item => {
    this.setState({
      selectItem: item
    })
  }
  render() {
    const { selectItem } = this.state;
    return (
      <List
        selectItem={selectItem}
        onItemPress={this.onItemPressed}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
