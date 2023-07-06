import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

import {BackButton} from './src/atoms';
import {
  SettingsFlow,
  SETTINGS_SCREENS,
} from './src/config/navigation/SettingsFlow';
import {
  Home,
  Market,
  Social,
  CreateWallet,
  Welcome,
  RecoverWallet,
} from './src/screens';
import './i18n.config';
import {AccountProvider} from './src/context/account.provider';

const Tab = createBottomTabNavigator();
const NewAccountStack = createNativeStackNavigator();

const AccountSetupFlow = () => {
  const {t} = useTranslation();

  return (
    <NewAccountStack.Navigator initialRouteName="Welcome">
      <NewAccountStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <NewAccountStack.Screen
        name="CreateWallet"
        component={CreateWallet}
        options={{
          title: t('newaccount.title'),
        }}
      />
      <NewAccountStack.Screen
        name="RecoverWallet"
        component={RecoverWallet}
        options={{
          title: t('recovery.title'),
        }}
      />
    </NewAccountStack.Navigator>
  );
};

const MainFlow = () => {
  const {t} = useTranslation();

  function getSettingsHeaderShown(route) {
    const routeName = getFocusedRouteNameFromRoute(route);
    return !SETTINGS_SCREENS.includes(routeName);
  }

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
        options={({route}) => ({
          headerShown: getSettingsHeaderShown(route),
          tabBarLabel: t('tabs.settings'),
          tabBarIcon: ({color, size}) => (
            <Icon name="cog" color={color} size={size} />
          ),
          tabBarStyle: {display: 'none'},
          headerTitle: t('tabs.settings'),
          headerLeft: () => <BackButton />,
        })}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const hasAccount = true;

  return (
    <SafeAreaProvider>
      <AccountProvider>
        <NavigationContainer>
          {hasAccount ? <MainFlow /> : <AccountSetupFlow />}
        </NavigationContainer>
      </AccountProvider>
    </SafeAreaProvider>
  );
};

export default App;
