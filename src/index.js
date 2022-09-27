import {NavigationContainer} from '@react-navigation/native';
import React, {createRef} from 'react';
import {Dimensions, SafeAreaView, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import linking from '../linking';
import Navigation from './navigation';
import store from './redux';

const {width, height} = Dimensions.get('screen');

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'light-content'}></StatusBar>
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: 30,
            width,
            height: height - 55,
            backgroundColor: '#1D1C22',
          }}>
          <Navigation></Navigation>

          {/* <Login></Login>
          <Home></Home>
          <Description></Description>
          <Booking></Booking>
          <Profile></Profile>
          <Search></Search>
          <Ticket></Ticket> */}
        </SafeAreaView>

        {/* <Navigation />
        <ModalConfirm ref={refModal}></ModalConfirm>
        <LottieLoading ref={refLoading} /> */}
      </NavigationContainer>
    </Provider>
  );
}
