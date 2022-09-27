import React, {useEffect, useState} from 'react';
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
import MyButton from '../../components/MyButton';
import {withNavigation} from '@react-navigation/compat';
import Header from '../../components/Header';
import SideTop from '../../components/SideTop';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constant/theme';
import icons from '../../assets/icons';
import phimProvider from '../../data-access/phim-provider';
import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('screen');

const Description = ({navigation}) => {
  const [state, _setState] = useState({showMore: false});
  const setState = data => {
    _setState(pre => ({...pre, ...data}));
  };

  const {data} = useSelector(state => state.description);
  const {
    description: {getDescription},
  } = useDispatch();

  const boxInfo = [
    {
      title: '16+',
      icon: icons.user,
      dataIndex: '',
    },
    {
      title: '2021',
      icon: icons.calendar,
      dataIndex: 'namPhatHanh',
    },
    {
      title: '2h 34min',
      icon: icons.clock,
      dataIndex: 'thoiLuong',
      render: data => data.thoiLuong + 'm',
    },
  ];
  useEffect(() => {
    getDescription(2);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1D1C22',
      }}>
      <Header title="Chi tiết" showBack={true}></Header>
      <SideTop></SideTop>
      <ScrollView
        style={{
          // borderWidth: 1,
          // borderColor: 'red',
          flex: 1,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/minion-poster.jpg')}
            style={{
              width: width,
              height: height / 2,
              borderRadius: 10,
            }}></Image>
          <LinearGradient
            style={{
              position: 'absolute',
              width,
              height: height / 2,
              opacity: 0.9,
              borderRadius: 10,
            }}
            colors={['transparent', COLORS.black]}></LinearGradient>
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              left: 0,
              right: 0,
              padding: 10,
            }}>
            <Text
              style={{
                paddingBottom: 10,
                color: COLORS.text,
                fontWeight: '500',
                fontSize: 20,
              }}>
              {data.tenPhim}
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={{color: COLORS.white}}>Phim hài hước . </Text>
              <Text style={{color: COLORS.white}}>Phiêu lưu . </Text>
              <Text style={{color: COLORS.white}}>Thiếu nhi </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: -20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 20,
          }}>
          {boxInfo.map((item, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                backgroundColor: COLORS.primary2,
                marginHorizontal: 5,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={item.icon}
                style={{
                  marginRight: 5,
                  width: 20,
                  height: 20,
                  resizeMode: 'stretch',
                }}
                tintColor={COLORS.yellow}></Image>
              <Text style={{color: 'white'}}>
                {item.render ? item.render(data) : data[item.dataIndex]}
              </Text>
            </View>
          ))}
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: 'white',
            }}>
            Mô tả
          </Text>
          <View
            style={{
              flexDirection: 'column',
              height: state.showMore ? 'auto' : 500,
            }}>
            <Text style={{color: COLORS.text3, fontWeight: '400'}}>
              {data.moTa}
            </Text>
            <View
              style={{
                marginTop: 5,
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setState({showMore: !state.showMore});
                }}>
                <View
                  style={{
                    padding: 4,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.primary2,
                  }}>
                  <Text style={{color: COLORS.text2}}>
                    {state.showMore ? 'Thu gọn' : 'Xem thêm'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <Text style={{marginTop: 20, fontSize: 20, color: COLORS.text}}>
            Diễn viên
          </Text>
          <View style={{marginHorizontal: -20, flexDirection: 'column'}}>
            <FlatList
              style={{marginTop: 10}}
              key={(_, index) => index}
              data={[1, 2, 3, 4, 5]}
              horizontal
              renderItem={({item, key}) => (
                <View key={key}>
                  <Image
                    source={require('../../assets/images/minion-poster.jpg')}
                    style={{
                      marginHorizontal: 5,
                      width: 120,
                      height: 150,
                      resizeMode: 'stretch',
                    }}></Image>
                </View>
              )}></FlatList>
          </View>

          <Text style={{marginTop: 20, fontSize: 20, color: COLORS.text}}>
            Cùng thể loại
          </Text>
          <View
            style={{
              marginHorizontal: -20,
              flexDirection: 'column',
              marginBottom: 80,
            }}>
            <FlatList
              style={{marginTop: 10}}
              key={(_, index) => index}
              data={[1, 2, 3, 4, 5]}
              horizontal
              renderItem={({item, key}) => (
                <View key={key}>
                  <Image
                    source={require('../../assets/images/minion-poster.jpg')}
                    style={{
                      marginHorizontal: 5,
                      width: 120,
                      height: 150,
                      resizeMode: 'stretch',
                    }}></Image>
                </View>
              )}></FlatList>
          </View>
        </View>
      </ScrollView>

      <View style={{position: 'absolute', bottom: 10, right: 10, left: 10}}>
        <MyButton
          content={'Đặt vé'}
          onClick={() => {
            navigation.push('Booking');
          }}></MyButton>
      </View>
    </View>
  );
};

Description.propTypes = {};

export default withNavigation(Description);
