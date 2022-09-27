import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import icons from '../../assets/icons';
import {COLORS} from '../../constant/theme';

const {width, height} = Dimensions.get('screen');

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          padding: 15,
          paddingLeft: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Cinema
        </Text>
        <Image
          source={icons.cart}
          style={{width: 30, height: 30}}
          tintColor={COLORS.yellow}></Image>
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 20,
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.push('Description');
          }}>
          <Image
            source={require('../../assets/images/minion-poster.jpg')}
            style={{width: width - 100, height: height / 2}}></Image>
        </TouchableWithoutFeedback>
      </View>

      <View
        style={{
          // marginTop: 20,
          // paddingLeft: 15,
          paddingVertical: 10,
          fontSize: 20,
          color: 'white',
        }}>
        <Text
          style={{
            paddingLeft: 15,
            fontSize: 20,
            color: 'white',
          }}>
          Xem nhiều nhất
        </Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <FlatList
          style={{}}
          key={(_, index) => index}
          data={[1, 2, 3, 4, 5]}
          horizontal
          renderItem={({item, key}) => (
            <View key={key}>
              <Image
                source={require('../../assets/images/minion-poster.jpg')}
                style={{
                  marginHorizontal: 5,
                  borderRadius: 8,
                  width: 120,
                  height: 150,
                  resizeMode: 'stretch',
                }}></Image>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
};

Home.propTypes = {};

export default withNavigation(Home);
