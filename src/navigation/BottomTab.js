import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {routes} from '../config';
import {COLORS} from '../../constants';

const Tab = createBottomTabNavigator();

function Icon({icon, focused}) {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: wp(6),
        height: hp(6),
        tintColor: focused ? COLORS.white : COLORS.gray,
      }}
    />
  );
}

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {height: '8%', backgroundColor: COLORS.black},
      }}>
      {routes.map(route => (
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon icon={route.icon} focused={focused} />
            ),
          }}
          key={`tab-id-${route.id}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </Tab.Navigator>
  );
}
