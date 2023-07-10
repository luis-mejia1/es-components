import React from 'react';

import { NavigationProps, useNavigation } from '../useNavigation';
import { useNavigationItem } from '../useNavigationItem';

function HorizontalNav(props: NavigationProps) {
  const Navigation = useNavigation('horizontal');

  return <Navigation {...props} />;
}

//does this ever run?
HorizontalNav.Item = useNavigationItem('horizontal');

export default HorizontalNav;
