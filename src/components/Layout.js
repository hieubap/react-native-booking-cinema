import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Header from './Header';

const Layout = ({children, title}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1D1C22',
      }}>
      <Header title={title}></Header>
      {children}
    </View>
  );
};

Layout.propTypes = {};

export default Layout;
