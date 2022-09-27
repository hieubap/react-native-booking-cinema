import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Avatar = ({size = 60, source, style}) => (
  <Image
    source={source || require('../assets/images/developer.jpg')}
    borderRadius={size / 2}
    style={[styles.avatar, {width: size, height: size}, style]}
  />
);

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2,
    borderColor: '#F7BB0D',
  },
});

export default Avatar;
