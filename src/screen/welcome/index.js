import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import MyButton from '../../components/MyButton';

const Size = Dimensions.get('screen');

const Login = props => {
  return (
    <View style={{paddingVertical: 40, paddingHorizontal: 20}}>
      <Text style={{fontSize: 18, color: 'white'}}>Cinema</Text>
      <Text
        style={{
          marginTop: 20,
          fontSize: 24,
          fontWeight: 'bold',
          color: 'white',
        }}>
        Welcome
      </Text>
      <Image
        source={require('../../assets/images/bg-login.png')}
        style={{width: Size.width - 40, height: 400, resizeMode: 'stretch'}}
      />
      <MyButton
        content={'Register'}
        style={{marginTop: 30, marginBottom: 15}}></MyButton>
      <MyButton content={'Login'} type="outline"></MyButton>
    </View>
  );
};

Login.propTypes = {};

export default Login;
