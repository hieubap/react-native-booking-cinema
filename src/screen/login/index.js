import React from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View} from 'react-native';
import InputTimeout from '../../components/InputTimeout';
import MyButton from '../../components/MyButton';
import Avatar from '../../components/Avatar';

const Login = props => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
        Login
      </Text>

      <View style={{marginTop: 30, alignItems: 'center'}}>
        <Avatar size={80}></Avatar>
      </View>

      <InputTimeout
        style={{marginVertical: 20}}
        placeholder="Email"></InputTimeout>
      <InputTimeout
        style={{marginVertical: 20}}
        placeholder="Password"></InputTimeout>
      <MyButton
        content={'Login'}
        // onClick={() => {
        //   console.log('login');
        // }}
      ></MyButton>
    </View>
  );
};

Login.propTypes = {};

export default Login;
