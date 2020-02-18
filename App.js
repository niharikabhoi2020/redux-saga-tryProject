import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeCount} from './actions/counts';

const App = () => {
  const dispatch = useDispatch();
  const counterReducer = useSelector(state => state);

  const decrementCount = () => {
    let {count} = counterReducer;
    dispatch(changeCount(count - 1));
  };
  const incrementCount = () => {
    let {count} = counterReducer;
    dispatch(changeCount(count + 1));
  };
  const increment = () => {
    dispatch({type: 'ChangeCount', payload: 1});
  };
  console.log(counterReducer);
  const {count} = counterReducer;
  return (
    <View styles={styles.container}>
      <Button title="increment" onPress={increment} />
      <Text>{count}</Text>
      <Button title="decrement" onPress={decrementCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
