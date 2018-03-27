import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const duration = 350;

export default class AnimatedSpring extends React.Component {
  constructor(props) {
    super(props);
    this.animatedVlaue = new Animated.Value(1);
    this.animatedLeftButton = new Animated.Value(0);
    this.animatedRightButton = new Animated.Value(0);
    this.animatedCenterButtonTop = new Animated.Value(0);
    this.opacity = new Animated.Value(0)
  }
  state = {
    toggle: false
  }
  _scaleButton() {
    const toggleVal = !this.state.toggle;
    this.setState({ toggle: toggleVal })
    Animated.parallel([
      Animated.spring(this.animatedLeftButton, {
        toValue: toggleVal ? -width / 4.5 : 0,
        duration: duration
      }),
      Animated.spring(this.animatedRightButton, {
        toValue: toggleVal ? width / 4.5 : 0,
        duration: duration
      }),
      Animated.spring(this.animatedCenterButtonTop, {
        toValue: toggleVal ? -height / 10 : 0,
        duration: duration
      }),
      Animated.spring(this.opacity, {
        toValue: toggleVal ? 1 : 0,
        duration: duration
      })
    ]).start();
  }
  render() {
    const animatedStyle = {
      opacity: { opacity: this.opacity },
      aniamtedLeftButtonStyle: {
        transform: [
          { translateX: this.animatedLeftButton },
        ],
      },
      aniamtedRightButtonStyle: {
        transform: [
          { translateX: this.animatedRightButton },
        ],
      },
      animatedCenterButtonTopStyle: {
        transform: [
          { translateY: this.animatedCenterButtonTop },
        ],
      }
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.btnBottomCenter]} onPress={() => this._scaleButton()}>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,]} >
          <Animated.View style={[styles.button, styles.btnBottomLeft, animatedStyle.aniamtedLeftButtonStyle, animatedStyle.opacity]} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,]} >
          <Animated.View style={[styles.button, styles.btnBottomRight, animatedStyle.aniamtedRightButtonStyle, animatedStyle.opacity]} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,]} >
          <Animated.View style={[styles.button, styles.btnBottomTop, animatedStyle.animatedCenterButtonTopStyle, animatedStyle.opacity]} />
        </TouchableOpacity>

      </View>
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
  button: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40
  },
  btnBottomCenter: {
    backgroundColor: '#45aaf2',
    zIndex: 1
  },
  btnBottomLeft: {
    backgroundColor: '#26de81',
    bottom: 0
  },
  btnBottomRight: {
    backgroundColor: '#2bcbba',
    bottom: 0
  },
  btnBottomTop: {
    backgroundColor: '#a55eea',
    bottom: 0
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
});