import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {COLORS} from '../../constant/theme';
import icons from '../../assets/icons';
import {NAMEDAY} from '../../constant/enum';
import LayoutBooking from './layout';

const {width, height} = Dimensions.get('screen');

const Time = props => {
  const [state, _setState] = useState({});
  const setState = data => {
    _setState(pre => ({...pre, ...data}));
  };

  return (
    <LayoutBooking title="Chọn thời gian">
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <View>
          <Image
            source={icons.arrowLeftCircle}
            style={{width: 30, height: 30, borderRadius: 15}}
            tintColor={COLORS.secondary}></Image>
        </View>
        <View
          style={{
            borderRadius: 20,
            height: 40,
            backgroundColor: COLORS.primary2,
            padding: 10,
            paddingHorizontal: 20,
            marginHorizontal: 10,
          }}>
          <Text style={{color: COLORS.text}}>Tháng 7</Text>
        </View>
        <View>
          <Image
            source={icons.arrowLeftCircle}
            style={{
              transform: [{rotate: '180deg'}],
              width: 30,
              height: 30,
              borderRadius: 15,
            }}
            tintColor={COLORS.secondary}></Image>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 20,
          height: 100,
        }}
        onStartShouldSetResponder={() => true}>
        <FlatList
          style={{marginTop: 10}}
          key={(_, index) => index}
          data={Array.from(Array(10).keys())}
          horizontal
          renderItem={({item, key}) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                setState({activeDate: item});
              }}>
              <View
                style={{
                  width: 50,
                  height: 90,
                  //   backgroundColor: '#666',
                  borderColor: COLORS.primary2,
                  borderWidth: 1,
                  borderRadius: 8,
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...(item === state.activeDate
                    ? {backgroundColor: COLORS.secondary}
                    : {}),
                }}>
                <Text
                  style={{
                    color:
                      state.activeDate === item ? COLORS.primary : COLORS.text,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item + 1}
                </Text>
                <Text
                  style={{
                    color:
                      state.activeDate === item ? COLORS.primary : COLORS.text,
                    textAlign: 'center',
                  }}>
                  {NAMEDAY[item % 7].toUpperCase()}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}></FlatList>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 10,
            marginVertical: 40,
          }}>
          {Array.from(Array(20).keys()).map((item, key) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                setState({activeTime: item});
              }}>
              <View
                style={{
                  width: (width - 54) / 3,
                  height: 50,
                  borderColor: COLORS.primary2,
                  borderWidth: 1,
                  borderRadius: 8,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...(item === state.activeTime
                    ? {backgroundColor: COLORS.secondary}
                    : {}),
                }}>
                <Text
                  style={{
                    color:
                      state.activeTime === item ? COLORS.primary : COLORS.text,
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  12:20
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
          {/* <FlatList
          // style={{marginTop: 10}}
          key={(_, index) => index}
          data={Array.from(Array(10).keys())}
          horizontal
          renderItem={({item, key}) => (
            
          )}></FlatList> */}
        </View>
      </ScrollView>
    </LayoutBooking>
  );
};

Time.propTypes = {};

export default Time;
