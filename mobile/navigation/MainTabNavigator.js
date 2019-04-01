import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ViewOrderScreen from '../screens/ViewOrderScreen';
import OrderScreen from '../screens/OrderScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreateUserScreen from '../screens/CreateUserScreen';

export default StackNavigator ({
    home 		: {
			screen 	: HomeScreen
		} ,

		login 	: {
			screen 	: LoginScreen
		} ,

		logout 		: {
			screen 	: LogoutScreen
		} ,

		pay 		: {
			screen 	: PaymentScreen
		} ,

		view 	: {
			screen 	: ViewOrderScreen
		} ,

		order 	: {
			screen 	: OrderScreen
		} ,
		create 	: {
			screen 	: CreateUserScreen
		}
	} ,

	{
		navigationOptions : ({ screenProps }) => {

			const 	theme 		= screenProps.theme ,
					appearance 	= header ( theme ) 	;

			return {
				headerStyle 		: appearance.header ,
				headerTitleStyle 	: appearance.title
			};
		}
	}
);

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const OrderStack = createStackNavigator({
  Order: OrderScreen,
});

OrderStack.navigationOptions = {
  tabBarLabel: 'Order',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ViewOrderStack = createStackNavigator({
   ViewOrder: ViewOrderScreen,
});

ViewOrderStack.navigationOptions = {
  tabBarLabel: 'View Order',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  OrderStack,
  ViewOrderStack,
  SettingsStack,
});
