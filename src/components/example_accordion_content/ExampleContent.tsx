import React, {memo} from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  index: number;
}
const defaultProps: Props = {
  index: 0,
};

const ExampleContent = ({index}: Props) => {
  return (
    <Text style={styles.content}>{`Content in container - ${index + 1}`}</Text>
  );
};
ExampleContent.defaultProps = defaultProps;

const styles = StyleSheet.create({
  content: {
    fontSize: 22,
    color: 'black',
    padding: 14,
  },
});

export default memo(ExampleContent);
