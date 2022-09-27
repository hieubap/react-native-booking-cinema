import React, {createRef, useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  View,
} from 'react-native';
import MyButton from '../../components/MyButton';
import Time from './time';
import Seat from './seat';
import Snack from './snack';
import Preview from './preview';
import Layout from '../../components/Layout';
import SideTop from '../../components/SideTop';
import StepBar from './stepBar';
import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('screen');

const Booking = props => {
  const refTranslate = useRef(new Animated.Value(0));
  const currentPage = useSelector(state => state.booking.currentPage);
  const {booking: {next}} = useDispatch();

  useEffect(() => {
      Animated.spring(refTranslate.current, {
        toValue: -(currentPage)*width,
        speed: 50,
        overshootClamping: true,
        useNativeDriver: true,
      }).start();
  },[currentPage])

  return (
    <Layout title={'Buy Tickets'}>
      <SideTop></SideTop>
      <StepBar></StepBar>
      <Animated.View
        style={{
          flexDirection: 'row',
          width: width * 4,
          flex: 1,
          transform: [{translateX: refTranslate.current}],
        }}>
        <Time></Time>
        <Seat></Seat>
        <Snack></Snack>
        <Preview></Preview>
      </Animated.View>
      <View style={{paddingBottom: 10}}>
      <MyButton onClick={next} content={'Tiếp theo'}></MyButton>
      </View>
      
    </Layout>
  );
};

Booking.propTypes = {};

export default Booking;
