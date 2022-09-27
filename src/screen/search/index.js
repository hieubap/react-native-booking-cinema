import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import InputTimeout from '../../components/InputTimeout';
import Header from '../../components/Header';

const {width, height} = Dimensions.get('screen');

const Search = props => {
  return (
    <View style={{flex: 1}}>
      <Header title="Tìm kiếm"></Header>
      <View style={{padding: 10}}>
        <InputTimeout placeholder="Tìm kiếm"></InputTimeout>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <InputTimeout
            style={{flex: 1, marginRight: 10}}
            placeholder="Genre: All"></InputTimeout>
          <InputTimeout
            style={{flex: 1}}
            placeholder="Rating: All"></InputTimeout>
        </View>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white',
          padding: 10,
        }}>
        Kết quả
      </Text>

      <ScrollView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {Array.from(Array(10).keys()).map((item, key) => (
            <View
              key={key}
              style={{
                // width: width / 2 - 20,
                // height: width / 2 - 20,
                //   backgroundColor: '#666',
                // borderColor: '#999',
                borderWidth: 1,
                margin: 4,
                // marginHorizontal: 5,
                alignContent: 'center',
              }}>
              <Image
                source={require('../../assets/images/minion-poster.jpg')}
                style={{
                  borderRadius: 10,
                  width: width / 2 - 20,
                  height: (width / 3) * 2,
                  resizeMode: 'stretch',
                }}></Image>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

Search.propTypes = {};

export default Search;
