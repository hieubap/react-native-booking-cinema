import React, {useEffect, useMemo} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {COLORS} from '../../constant/theme';
import {withNavigation} from '@react-navigation/compat';
import MyButton from '../../components/MyButton';
import { useDispatch } from 'react-redux';

const {width, height} = Dimensions.get('screen');

const StepBar = ({navigation, children}) => {
  const {routeName} = navigation.state;

  // const {
  //   navigation: {setup},
  // } = useDispatch();

  // useEffect(() => {
  //   console.log('setup...');
  //   setup({navigation});
  // }, [navigation.state.routeName]);

  const numbers = useMemo(
    () => [
      {
        current: 1,
        routeName: 'Booking',
        name: 'Chọn thời gian',
      },
      {
        current: 2,
        routeName: 'Booking_Seat',
        name: 'Chọn ghế',
      },
      {
        current: 3,
        routeName: 'Booking_Snack',
        name: 'Chọn đồ ăn',
      },
      {
        current: 4,
        routeName: 'Booking_Preview',
        name: 'Hóa đơn',
      },
    ],
    [],
  );
  const {name, current, toRouteName} = useMemo(() => {
    const index = numbers.findIndex(i => i.routeName === routeName);
    console.log(
      'rememo',
      index,
      'index',
      routeName,
      numbers[index + 1]?.routeName,
    );
    return {
      name: numbers[index]?.name,
      current: numbers[index]?.current,
      toRouteName: numbers[index + 1]?.routeName,
    };
  }, [navigation]);

  return (
    <View
      style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        {numbers.map((item, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 5,
            }}>
            <View
              style={{
                // flex: 1,
                height: 10,
                borderRadius: 5,
                backgroundColor:
                  index < current ? COLORS.secondary : COLORS.primary2,
              }}></View>
          </View>
        ))}
      </View>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: COLORS.primary2,
        }}></View>
    </View>
  );
};

StepBar.propTypes = {};

export default withNavigation(StepBar);
