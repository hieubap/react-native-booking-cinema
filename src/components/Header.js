import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {COLORS} from '../constant/theme';
import icons from '../assets/icons';
import {withNavigation} from '@react-navigation/compat';

const Header = ({navigation, showBack = false, title = 'Welcome'}) => {
  console.log(navigation, 'navigation');
  return (
    <View
      style={{
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {showBack && (
        <TouchableWithoutFeedback
          onPress={() => {
            if (navigation.canGoBack()) navigation.pop();
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: COLORS.secondary,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.arrowLeft}
              style={{width: 20, height: 20}}></Image>
          </View>
        </TouchableWithoutFeedback>
      )}

      <Text
        style={{
          marginLeft: 15,
          fontWeight: 'bold',
          fontSize: 18,
          color: COLORS.text,
        }}>
        {title}
      </Text>
    </View>
  );
};

Header.propTypes = {};

export default withNavigation(Header);
