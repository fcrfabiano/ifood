import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { withNavigation } from 'react-navigation';

import {
  CouponButton,
  Divisor,
  Logo,
  Content,
  CouponInfo,
  Title,
  Validity,
} from './styles';

function Coupon({ navigation }) {
  return (
    <CouponButton onPress={() => {}}>
      
    </CouponButton>
  );
}

export default withNavigation(Coupon);
