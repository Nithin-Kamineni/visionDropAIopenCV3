import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import {Alert, Modal, Pressable, Image} from 'react-native';
// import { CameraView, useCameraPermissions } from 'expo-camera';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Slider,
  NativeBaseProvider,
  Badge,
  Box,
  Center,
} from '@gluestack-ui/themed-native-base';
import Svg, {Circle, Rect, Path} from 'react-native-svg';
import Categories from './Categories';
import Camera from './Camera';
import Permissions from './Permissions';

// import RTNMyPicker from 'rtn-my-picker/js/NativeMyPicker';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function CameraNavigation({navigation}: any) {
  var showPermissionsPage = true;
  return (
    <Stack.Navigator
      initialRouteName={showPermissionsPage ? 'Permissions' : 'Categories'}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Permissions" component={Permissions} />
      <Stack.Screen
        name="CameraPage"
        component={Camera}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
