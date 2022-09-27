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
const Profile = props => {
  return (
    <View style={{flex: 1}}>
      <Header title="Cá nhân"></Header>

      <View style={{marginTop: 30, alignItems: 'center'}}>
        <Avatar size={100}></Avatar>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: COLORS.text, fontSize: 18, fontWeight: '500'}}>
          Ngô Hiếu
        </Text>
        <Text style={{color: COLORS.text2, fontWeight: '300'}}>
          ngohieu1811@gmail.com
        </Text>
      </View>

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
                padding: 25,
                backgroundColor: COLORS.primary3,
                borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={item.icon}
                  style={{
                    marginRight: 10,
                    width: 20,
                    height: 20,
                    resizeMode: 'stretch',
                  }}
                  tintColor={COLORS.yellow}></Image>
                <Text style={{color: 'white'}}>{item.name}</Text>
              </View>
              <Image
                source={icons.arrowLeft}
                style={{
                  transform: [{rotate: '180deg'}],
                  width: 20,
                  height: 20,
                }}
                tintColor={COLORS.text2}></Image>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

Profile.propTypes = {};

export default Profile;
