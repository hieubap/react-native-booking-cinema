import React, {useEffect, useMemo} from 'react';
import {Dimensions, Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {COLORS} from '../../constant/theme';
import {withNavigation} from '@react-navigation/compat';
import icons from '../../assets/icons';
import { useDispatch } from 'react-redux';

const {width, height} = Dimensions.get('screen');

const LayoutBooking = ({title, children}) => {
    const {booking: {back}} = useDispatch();

  return (
    <View
      style={{
        width,
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <View style={{paddingHorizontal: 15, paddingVertical: 10, flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color: COLORS.text, fontWeight: 'bold', fontSize: 19}}>
          {title}
        </Text>
        
      <TouchableWithoutFeedback
        onPress={back}>
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
      </View>
      <View style={{flex: 1}}>{children}</View>
      {/* <View style={{}}>
        <MyButton
          onClick={() => {
            if (current < pageBooking.length)
              navigation.navigate(pageBooking[current], {current});
          }}
          content={'Tiếp theo'}></MyButton>
      </View> */}
    </View>
  );
};

LayoutBooking.propTypes = {};

export default withNavigation(LayoutBooking);
