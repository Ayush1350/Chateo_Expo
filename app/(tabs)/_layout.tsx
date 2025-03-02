import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex justify-between items-center gap-2 mt-[50%] min-w-20">
      <Icon name={icon} size={30} color={color} />
      <Text className={`${focused ? 'font-semibold' : 'font-normal'} text-xs`}>
        {name}
      </Text>
    </View>
  );
};

const tabConfig = [
  { name: 'home', icon: 'home', title: 'Home' },
  { name: 'create', icon: 'plus', title: 'Create' },
  { name: 'profile', icon: 'user', title: 'Profile' },
  { name: 'bookmark', icon: 'bookmark', title: 'Bookmark' },
];

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      {tabConfig?.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={tab.icon} color={color} name={tab.title} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
