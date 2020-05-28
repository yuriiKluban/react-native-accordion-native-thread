import React, {memo, ReactElement} from 'react';
import {StyleSheet, processColor, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {mix, mixColor} from 'react-native-redash';

const size = 30;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  transition: Animated.Node<number>;
}

const Arrow = ({transition}: Props): ReactElement => {
  const rotateZ = mix(transition, Math.PI, 0);
  const backgroundColor = mixColor(
    transition,
    processColor('#999797'),
    processColor('#4ce8ee'),
  ) as Animated.Node<number>;
  return (
    <Animated.View
      // @ts-ignore
      style={[styles.container, {transform: [{rotateZ}], backgroundColor}]}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
        }}>
        &#8681;
      </Text>
    </Animated.View>
  );
};

export default memo(Arrow);
