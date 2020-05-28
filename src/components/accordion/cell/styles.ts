import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export interface Style {
  title: TextStyle;
  content: ViewStyle;
}

const getSheet = () =>
  StyleSheet.create<Style>({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    content: {
      overflow: 'hidden',
      backgroundColor: 'yellow',
    },
  });

export default getSheet;
