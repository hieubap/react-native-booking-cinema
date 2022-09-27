import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import InputTimeout from '../../components/InputTimeout';
import MyButton from '../../components/MyButton';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import {COLORS} from '../../constant/theme';
import icons from '../../assets/icons';

const {width, height} = Dimensions.get('screen');
const datas = [
  {
    name: 'Profile',
    icon: icons.user,
  },
  {
    name: 'Bookmarked',
    icon: icons.bookmark,
  },
  {
    name: 'Deals',
    icon: icons.handshake,
  },
  {
    name: 'Coupon',
    icon: icons.ticket,
  },
  {
    name: 'Rewards',
    icon: icons.star,
  },
  {
    name: 'Setting',
    icon: icons.setting,
  },
  {
    name: 'Setting',
    icon: icons.setting,
  },
];
const History = props => {
  return (
    <View style={{flex: 1}}>
      <Header title="Lịch sử"></Header>

      <ScrollView
        style={{
          marginTop: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          {datas.map((item, index) => (
            <View
              key={index}
              style={{
                width: width - 30,
                marginBottom: 10,
                padding: 8,
                backgroundColor: COLORS.primary3,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/images/bg-login.png')}
                  style={{width: 120, height: 120, borderRadius: 10}}></Image>
                <View style={{paddingHorizontal: 10}}>
                  <Text
                    style={{
                      color: COLORS.text,
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Minion
                  </Text>
                  <View style={{paddingTop: 5, flexDirection: 'row'}}>
                    <Image
                      source={icons.calendar}
                      style={{width: 20, height: 20, marginRight: 5}}
                      tintColor={COLORS.yellow}></Image>
                    <Text
                      style={{
                        color: COLORS.text2,
                        fontSize: 14,
                        fontWeight: '300',
                      }}>
                      Thứ hai, 18/8/2022
                    </Text>
                  </View>
                  <View style={{paddingTop: 5, flexDirection: 'row'}}>
                    <Image
                      source={icons.clock}
                      style={{
                        width: 18,
                        height: 18,
                        marginRight: 7,
                        resizeMode: 'stretch',
                      }}
                      tintColor={COLORS.yellow}></Image>
                    <Text
                      style={{
                        color: COLORS.text2,
                        fontSize: 14,
                        fontWeight: '300',
                      }}>
                      8:00 - 10:00
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

History.propTypes = {};

export default History;
