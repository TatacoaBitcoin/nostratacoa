import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

import {BackButton} from './src/atoms';
import {
  Home, 
  Market, 
  Social, 
  Settings, 
  RelaySettings,
  CreateWallet,
  Welcome,
} from './src/screens';
import './i18n.config';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const NewAccountStack = createNativeStackNavigator();

const NewAccountFlow = () => {
  return (
    <NewAccountStack.Navigator initialRouteName="Welcome">
      <NewAccountStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: 'Welcome',
          headerShown: false,
        }}
      />
      <NewAccountStack.Screen
        name="CreateWallet"
        component={CreateWallet}
        options={{
          title: 'Create New Account',
        }}
      />
    </NewAccountStack.Navigator>
  );
};

const SettingsFlow = () => {
  return(
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
      }}>
      <SettingsStack.Screen
        name="Home"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen
        name="Relays Settings"
        component={RelaySettings}
      />
    </SettingsStack.Navigator>
  );
}

const MainFlow = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: t('tabs.home'),
          tabBarIcon: ({color, size}) => (
            <Icon name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarLabel: t('tabs.market'),
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          tabBarLabel: t('tabs.social'),
          tabBarIcon: ({color, size}) => (
            <Icon name="comment-text-multiple" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsFlow}
        options={{
          headerShown: true,
          tabBarLabel: t('tabs.settings'),
          tabBarIcon: ({color, size}) => (
            <Icon name="cog" color={color} size={size} />
          ),
          tabBarStyle: {display: 'none'},
          headerTitle: t('tabs.settings'),
          headerLeft: () => <BackButton />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const hasAccount = false;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {hasAccount ? <MainFlow /> : <NewAccountFlow />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
