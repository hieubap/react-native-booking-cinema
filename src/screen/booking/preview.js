import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../../constant/theme';
import icons from '../../assets/icons';
import LayoutBooking from './layout';

const {width, height} = Dimensions.get('screen');

const Preview = props => {
  return (
    <LayoutBooking title="Hóa đơn" current={4}>
      <View
        style={{paddingHorizontal: 10, marginBottom: 20, flexDirection: 'row'}}>
        <View style={{}}>
          <Image
            source={require('../../assets/images/minion-poster.jpg')}
            style={{
              borderRadius: 10,
              marginHorizontal: 5,
              width: 150,
              height: 200,
              resizeMode: 'stretch',
            }}></Image>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <Text style={{color: COLORS.text, fontWeight: 'bold', fontSize: 16}}>
            Minions: Despicable Me 2
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={icons.calendar}
                style={{width: 20, height: 20}}
                tintColor={COLORS.yellow}></Image>
              <Text
                style={{fontWeight: '300', color: COLORS.text, marginLeft: 5}}>
                2022
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Image
                source={icons.clock}
                style={{width: 16, height: 16}}
                tintColor={COLORS.yellow}></Image>
              <Text
                style={{fontWeight: '300', color: COLORS.text, marginLeft: 5}}>
                2h 40min
              </Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <Text style={{color: COLORS.text}}>Action . Advence . Baby</Text>
          </View>

          <Text style={{color: COLORS.text}}>Sat, 06.07.2022</Text>
          <Text style={{color: COLORS.text}}>17:30 - 20:00</Text>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            paddingHorizontal: 15,
          }}>
          {[
            {
              icon: icons.clock,
              content: 'Thứ 7, 8/8/2022',
            },
            {
              icon: icons.ticket,
              content: '2x',
            },
          ].map((item, key) => (
            <View
              key={key}
              style={{
                flex: 1,
                height: 80,
                backgroundColor: COLORS.primary3,
                borderRadius: 15,
                justifyContent: 'center',
                marginBottom: 10,
                paddingLeft: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={item.icon}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 8,
                    resizeMode: 'stretch',
                  }}
                  tintColor={COLORS.yellow}></Image>
                <Text style={{color: 'white'}}>{item.content}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LayoutBooking>
  );
};

Preview.propTypes = {};

export default Preview;
