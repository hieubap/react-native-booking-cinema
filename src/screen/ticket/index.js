import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, Text, View} from 'react-native';
import Header from '../../components/Header';
import {COLORS} from '../../constant/theme';
import QRCode from 'react-native-qrcode-svg';

const {width, height} = Dimensions.get('screen');

const Ticket = props => {
  return (
    <View>
      <Header title="Lịch xem sắp tới"></Header>
      <View style={{marginTop: 20}}>
        <View style={{zIndex: 1, alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/minion-poster.jpg')}
            style={{
              width: width - 40,
              height: 300,
              borderRadius: 10,
              resizeMode: 'repeat',
            }}></Image>
        </View>

        <View
          style={{
            backgroundColor: COLORS.primary3,
            padding: 20,
            marginTop: -5,
            marginHorizontal: 20,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Minion 2
          </Text>

          <View>
            <Text style={{color: 'white'}}>Action . baby . Advence</Text>
            <Text style={{color: 'white'}}>Sat, 06.08.2022</Text>
            <Text style={{color: 'white'}}>17:30 - 20:00</Text>
            <Text style={{color: 'white'}}>C9 - T6</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.primary3,
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <QRCode  size={200} value="MINION________ abcd" />
        </View>
      </View>
    </View>
  );
};

Ticket.propTypes = {};

export default Ticket;
