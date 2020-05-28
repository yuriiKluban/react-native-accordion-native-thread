import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Accordion, {AccordionItem} from './src/components/accordion/Accordion';
import ExampleContent from './src/components/example_accordion_content/ExampleContent';

const exampleAccordionValues: AccordionItem[] = [
  {
    title: 'Title 1',
    content: <ExampleContent index={0} />,
  },
  {
    title: 'Title 2',
    content: <ExampleContent index={1} />,
  },
  {
    title: 'Title 3',
    content: <ExampleContent index={2} />,
  },
  {
    title: 'Title 4',
    content: <ExampleContent index={3} />,
  },
  {
    title: 'Title 5',
    content: <ExampleContent index={4} />,
  },
  {
    title: 'Title 6',
    content: <ExampleContent index={5} />,
  },
  {
    title: 'Title 7',
    content: <ExampleContent index={6} />,
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Accordion
          data={exampleAccordionValues}
          touchWrapperStyle={styles.touchWrapperStyle}
          contentHeight={54}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  touchWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#bbeed2',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 1,
    height: 51,
    paddingHorizontal: 16,
  },
});

export default App;
