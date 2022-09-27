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
import LayoutBooking from './layout';

const {width, height} = Dimensions.get('screen');

const Snack = props => {
  const [state, _setState] = useState({});
  const setState = data => {
    _setState(pre => ({...pre, ...data}));
  };

  return (
    <LayoutBooking title={'Chọn đồ ăn'} current={3}>
      <View style={{marginBottom: 0, paddingLeft: 10}}>
        <FlatList
          keyExtractor={(_, index) => index}
          data={Array.from(Array(6).keys())}
          horizontal
          renderItem={({item, key}) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                setState({selectFilter: item});
              }}>
              <View
                style={{
                  width: 120,
                  height: 50,
                  borderColor: COLORS.primary2,
                  borderWidth: 1,
                  borderRadius: 8,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...(item === state.selectFilter
                    ? {backgroundColor: COLORS.secondary}
                    : {}),
                }}>
                <Text
                  style={{
                    color:
                      state.selectFilter === item
                        ? COLORS.primary
                        : COLORS.text,
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Combo
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}></FlatList>
      </View>

      <ScrollView
        style={{
          // flex: 1,
          paddingHorizontal: 12,
          borderColor: 'green',
          alignContent: 'center',
        }}>
        <View
          style={{
            width,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {Array.from(Array(10).keys()).map((item, key) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                setState({select: item});
              }}>
              <View
                key={key}
                style={{
                  width: width / 2 - 37,
                  height: width / 2 + 10,
                  margin: 10,
                  borderColor:
                    state.select === item ? COLORS.yellow : COLORS.primary3,
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: 7,
                  // marginHorizontal: 5,
                  alignContent: 'center',
                }}>
                <View
                  style={{
                    width: 80,
                    height: 35,
                    borderRadius: 8,
                    backgroundColor: COLORS.primary3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: COLORS.text,
                      fontSize: 14,
                      // fontWeight: '500',
                    }}>
                    1.000.000
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../assets/images/coca.png')}
                    style={{
                      width: 70,
                      height: 120,
                      resizeMode: 'stretch',
                    }}></Image>
                </View>
                <View>
                  <Text
                    style={{
                      padding: 8,
                      textAlign: 'center',
                      fontWeight: '500',
                      color: 'white',
                    }}>
                    Coca-cola {item}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </LayoutBooking>
  );
};

Snack.propTypes = {};

export default Snack;
