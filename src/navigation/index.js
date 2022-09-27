import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';

import {connect} from 'react-redux';
import icons from '../assets/icons';
import {COLORS} from '../constant/theme';
import Booking from '../screen/booking';
import Preview from '../screen/booking/preview';
import Seat from '../screen/booking/seat';
import Snack from '../screen/booking/snack';
import Time from '../screen/booking/time';
import Description from '../screen/description';
import History from '../screen/history';
import Home from '../screen/home';
import Login from '../screen/login';
import Profile from '../screen/profile';
import Search from '../screen/search';
import Ticket from '../screen/ticket';

const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

const StackNavigation = props => {
  return (
    <Stack.Navigator
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Center"
      headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Center" component={TabNavigation} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Booking" component={Booking} />
      {/* <Stack.Screen name="Booking_Time" component={Time} />
      <Stack.Screen
        options={{gestureDirection: 'horizontal'}}
        name="Booking_Seat"
        component={Seat}
      />
      <Stack.Screen
        options={{gestureDirection: 'horizontal'}}
        name="Booking_Snack"
        component={Snack}
      />
      <Stack.Screen
        options={{gestureDirection: 'horizontal'}}
        name="Booking_Preview"
        component={Preview}
      /> */}
    </Stack.Navigator>
  );
};

const screenOptions = [
  {
    name: 'Home',
    icon: icons.homeOutlined,
    iconActive: icons.homeFilled,
    component: Home,
  },
  {
    name: 'Search',
    icon: icons.searchOutlined,
    iconActive: icons.searchFilled,
    component: Search,
  },
  {
    name: 'Ticket',
    icon: icons.videoOutlined,
    iconActive: icons.videoFilled,
    component: Ticket,
  },
  {
    name: 'History',
    icon: icons.ticketOutlined,
    iconActive: icons.ticketFilled,
    component: History,
  },
  {
    name: 'Profile',
    icon: icons.userOutlined,
    iconActive: icons.userFilled,
    component: Profile,
  },
];

const TabChild = ({
  route: currentScreen,
  state,
  index,
  stackNavigation,
  tabNavigation,
  ...prop
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        currentScreen.isStack
          ? stackNavigation.push(currentScreen.name)
          : tabNavigation.navigate(currentScreen.name);
      }}>
      <View
        style={{
          width: '20%',
          alignItems: 'center',
          height: 50,
          justifyContent: 'center',
        }}>
        <Image
          source={
            state.index === index
              ? currentScreen.iconActive || currentScreen.icon
              : currentScreen.icon
          }
          style={{width: 24, height: 24, marginTop: 4, resizeMode: 'stretch'}}
          tintColor={COLORS.yellow}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

function TabNavigation({navigation: stackNavigation, ...props}) {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{backgroundColor: '#1D1C22'}}
      //   drawerContent={props => <CustomDrawerContent {...props} />}
      //   screenOptions={({route, navigation: tabNavigation}) => ({
      //     tabBarIcon: ({focused, color, size}) => {
      //       const currentScreen = screenOptions.find(
      //         item => item.name === route.name,
      //       );
      //       // You can return any component that you like here!
      //       return (
      //         <TouchableOpacity
      //           key={route.name}
      //           style={{
      //             width: '100%',
      //             alignItems: 'center',
      //             borderWidth: 1,
      //             height: 50,
      //             marginTop: 15,
      //           }}
      //           onPress={() => {
      //             currentScreen.isStack
      //               ? stackNavigation.navigate(route.name)
      //               : tabNavigation.navigate(route.name);
      //           }}>
      //           <Image
      //             source={
      //               focused
      //                 ? currentScreen.iconActive || currentScreen.icon
      //                 : currentScreen.icon
      //             }
      //             style={{width: 32, height: 32, marginTop: 8}}
      //           />
      //         </TouchableOpacity>
      //       );
      //     },
      //     tabBarLabel: '',
      //     tabBarBadgeStyle: {borderWidth: 1, borderColor: 'crimson'},
      //   })}
      tabBar={props => (
        <View
          style={{
            backgroundColor: '#1D1C22',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {screenOptions.map((item, index) => (
            <TabChild
              key={index}
              route={item}
              index={index}
              tabNavigation={props.navigation}
              stackNavigation={stackNavigation}
              {...props}
            />
          ))}
        </View>
      )}>
      {screenOptions.map((item, index) => (
        <BottomTab.Screen
          key={index + 1}
          name={item.name}
          component={item.component}
        />
      ))}
    </BottomTab.Navigator>
  );
}

export default connect(({}) => ({}))(StackNavigation);
