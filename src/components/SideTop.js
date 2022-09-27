import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Text, View} from 'react-native';
import {COLORS} from '../constant/theme';
import {withNavigation} from '@react-navigation/compat';

const {width, height} = Dimensions.get('screen');

const data = [
  {
    text: 'Mô tả',
    key: 'Desciption',
  },
  {
    text: 'Thời gian',
    key: 'ShowTime',
  },
  {
    text: 'Đặt vé',
    key: 'Booking',
  },
];

const SideTop = ({active, navigation}) => {
  const {routeName} = navigation.state;

  const activeKey = useMemo(() => {
    console.log(routeName, 'routeName', navigation);
    return routeName === 'Booking' ? 2 : 0;
  }, [routeName]);

  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            padding: 5,
            borderRadius: 10,
            width: width / 3 - 30,
            alignItems: 'center',
            ...(index === activeKey
              ? {
                  backgroundColor: COLORS.primary2,
                }
              : {}),
          }}>
          <Text
            style={{
              color: index === activeKey ? COLORS.secondary : COLORS.text,
              fontSize: 16,
            }}>
            {item.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

SideTop.propTypes = {};

export default withNavigation(SideTop);
