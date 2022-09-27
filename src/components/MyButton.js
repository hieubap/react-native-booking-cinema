import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const config = {
  fill: StyleSheet.create({
    styleBtn: {backgroundColor: '#F7BB0D', borderColor: '#E5A90B'},
    styleText: {fontWeight: 'bold', color: 'black'},
  }),
  outline: StyleSheet.create({
    styleBtn: {backgroundColor: '#1D1C22', borderColor: '#24232B'},
    styleText: {color: 'white'},
  }),
};

const MyButton = ({content, onClick, style, type = 'fill'}) => {
  const {styleBtn, styleText} = config[type];
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View
        style={[
          {
            borderRadius: 10,
            padding: 15,
            alignItems: 'center',
            borderWidth: 2,
          },
          styleBtn,
          style,
        ]}>
        <Text style={[styleText]}>{content}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

MyButton.propTypes = {};

export default MyButton;
