import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  GluestackUIProvider,
  Text,
  Icon,
  AddIcon,
  createIcon,
} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {
  GluestackIcon,
  CameraIcon,
  InformationCircleIcon,
  TestTubeIcon,
  ReportsIcon,
} from '../icons/icons';

export default function CustomTabBar() {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Icon as={InformationCircleIcon} size="xl" />
    </View>
  );
}
