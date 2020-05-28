import React, {memo, ReactElement} from 'react';
import {FlatList, ViewStyle} from 'react-native';
import Cell from './cell/Cell';

export interface AccordionItem {
  title: string;
  content: ReactElement;
}

interface Props {
  data: AccordionItem[];
  touchWrapperStyle?: ViewStyle;
  contentWrapperStyle?: ViewStyle;
  contentHeight: number;
}
const defaultProps: Props = {
  data: [],
  contentHeight: 0,
};

const Accordion = ({
  data,
  touchWrapperStyle,
  contentWrapperStyle,
  contentHeight,
}: Props): ReactElement => {
  const renderItem = ({item}: {item: AccordionItem}): ReactElement => {
    return (
      <Cell
        touchWrapperStyle={touchWrapperStyle}
        contentWrapperStyle={contentWrapperStyle}
        title={item.title}
        content={item.content}
        contentHeight={contentHeight}
      />
    );
  };

  const keyExtractor = (item: any, index: number): string => `${index}`;

  console.log('render Accordion list');
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

Accordion.defaultProps = defaultProps;

export default memo(Accordion);
