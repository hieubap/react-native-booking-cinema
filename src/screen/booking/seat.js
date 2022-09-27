import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constant/theme';
import LayoutBooking from './layout';

const {width, height} = Dimensions.get('screen');

const heightTivi = 80;

const datData = [
  {hang: 1, cot: 1},
  {hang: 3, cot: 2},
  {hang: 1, cot: 2},
];

const dataBan = [
  {hang: 2, cot: 2},
  {hang: 5, cot: 2},
  {hang: 7, cot: 6},
  {hang: 7, cot: 7},
];

const Seat = ({limitSheet = 3}) => {
  const [state, _setState] = useState({listSelect: []});
  const setState = data => {
    _setState(pre => ({...pre, ...data}));
  };

  const sheets = useMemo(() => {
    const array = Array.from(Array(64).keys()).fill(0);
    dataBan.forEach(i => {
      array[i.hang * 8 + i.cot] = 3;
    });
    datData.forEach(i => {
      array[i.hang * 8 + i.cot] = 2;
    });
    state.listSelect.forEach(i => {
      array[i] = 1;
    });
    return array;
  }, [state.listSelect]);

  const onSelect = index => () => {
    let listSelect = [...state.listSelect];
    if (
      (sheets[index] && sheets[index] !== 1) ||
      (limitSheet <= listSelect.length && !listSelect.includes(index))
    ) {
      return;
    }
    if (listSelect.includes(index)) {
      listSelect = listSelect.filter(i => i !== index);
    } else {
      listSelect.push(index);
    }
    setState({listSelect});
  };
  return (
    <LayoutBooking title="Chọn ghế" current={2}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: width - 240,
            height: 5,
            backgroundColor: 'white',
          }}></View>
        {/* <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: 'transparent',
            borderLeftWidth: 50,
            borderRightWidth: 50,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomWidth: 50,
            borderBottomColor: 'red',
          }}></View> */}
        <View style={{position: 'relative', flexDirection: 'row', height: 80}}>
          <View
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              zIndex: 10,
              borderLeftWidth: 80,
              borderLeftColor: COLORS.primary,
              borderBottomWidth: heightTivi,
              borderBottomColor: 'transparent',
            }}></View>
          <LinearGradient
            style={{
              width: width - 80,
            }}
            colors={[COLORS.primary2, COLORS.primary]}></LinearGradient>
          <View
            style={{
              position: 'absolute',
              right: 0,
              width: 0,
              height: 0,
              zIndex: 10,
              borderRightWidth: 80,
              borderRightColor: COLORS.primary,
              borderBottomWidth: heightTivi,
              borderBottomColor: 'transparent',
            }}></View>
        </View>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {sheets.map((sheet, index) => (
            <TouchableWithoutFeedback key={index} onPress={onSelect(index)}>
              <View
                style={{
                  // flex: 1,
                  width: width / 10,
                  height: width / 10,
                  borderWidth: 1,
                  borderColor: COLORS.primary3,
                  borderRadius: 10,
                  margin: 2,
                  backgroundColor:
                    sheet === 1
                      ? COLORS.white
                      : sheet === 2
                      ? COLORS.yellow
                      : sheet === 3
                      ? COLORS.red
                      : COLORS.primary,
                }}></View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 260,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {[
            [COLORS.primary3, 'Trống'],
            [COLORS.white, 'Chọn'],
            [COLORS.red, 'Bận'],
            [COLORS.yellow, 'Đã đặt'],
          ].map((i, index) => (
            <View
              key={index}
              style={{
                width: 130,
                height: 25,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 10,
                  borderRadius: 10,
                  // borderWidth: 1,
                  backgroundColor: i[0],
                }}></View>
              <Text style={{color: 'white'}}>{i[1]}</Text>
            </View>
          ))}
        </View>
      </View>
    </LayoutBooking>
  );
};

Seat.propTypes = {};

export default Seat;
