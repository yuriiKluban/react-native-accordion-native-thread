import React, {memo, ReactElement} from 'react';
import {Text, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import getSheet from './styles';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Arrow from './Arrow';

const {Value} = Animated;

interface Props {
  state: Animated.Value<State>;
  open: Animated.Value<number>;
  gestureHandler: {
    onHandlerStateChange: (...args: any[]) => void;
    onGestureEvent: (...args: any[]) => void;
  };
  bottomRadius?: Animated.Node<number>;
  title: string;
  touchWrapperStyle?: ViewStyle;
  transition: Animated.Node<number>;
}
const defaultProps: Props = {
  state: new Value(State.UNDETERMINED),
  open: new Value<number>(0),
  gestureHandler: {
    onHandlerStateChange: () => {},
    onGestureEvent: () => {},
  },
  title: '',
  transition: new Value<number>(0),
};

const TouchArea = ({
  gestureHandler,
  bottomRadius,
  title,
  touchWrapperStyle,
  transition,
}: Props): ReactElement => {
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View
        style={[
          touchWrapperStyle,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius,
          },
        ]}>
        <Text style={getSheet().title}>{title}</Text>
        <Arrow transition={transition} />
      </Animated.View>
    </TapGestureHandler>
  );
};
TouchArea.defaultProps = defaultProps;

export default memo(TouchArea);
