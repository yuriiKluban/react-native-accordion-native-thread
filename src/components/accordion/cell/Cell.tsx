import React, {memo, ReactElement} from 'react';
import {LayoutChangeEvent, ViewStyle} from 'react-native';
import Animated, {Value} from 'react-native-reanimated';
import {onGestureEvent, withTransition} from 'react-native-redash';
import {State} from 'react-native-gesture-handler';
import TouchArea from './TouchArea';
import getSheet from './styles';

const {interpolate, cond, eq, not, set, block, greaterThan, useCode} = Animated;

interface Props {
  title: string;
  content: ReactElement;
  contentHeight: number;
  touchWrapperStyle?: ViewStyle;
  contentWrapperStyle?: ViewStyle;
}

const defaultProps: Props = {
  title: '',
  content: <></>,
  contentHeight: 0,
};

const Cell = ({
  title,
  content,
  contentHeight,
  touchWrapperStyle,
}: Props): ReactElement => {
  const open = new Value<number>(0);
  const transition = withTransition(open);
  const state = new Value(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({state});
  const bottomRadius = interpolate(transition, {
    inputRange: [0, 0.05],
    outputRange: [6, 0],
  });

  const height = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  useCode(() => cond(eq(state, State.END), set(open, not(open))), [
    open,
    state,
  ]);

  console.log('render Accordion item');

  return (
    <>
      <TouchArea
        state={state}
        open={open}
        touchWrapperStyle={touchWrapperStyle}
        title={title}
        bottomRadius={bottomRadius}
        gestureHandler={gestureHandler}
        transition={transition}
      />
      <Animated.View style={[getSheet().content, {height}]}>
        {content}
      </Animated.View>
    </>
  );
};
Cell.defaultProps = defaultProps;

export default memo(Cell);
