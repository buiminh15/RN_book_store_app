import {icons} from '../../constants';
import HomeStack from '../navigation/HomeStack';

const routes = [
  {
    id: 1,
    name: 'Home',
    icon: icons.dashboard_icon,
    component: HomeStack,
  },
  {
    id: 2,
    name: 'Search',
    icon: icons.search_icon,
    component: HomeStack,
  },
  {
    id: 3,
    name: 'Notification',
    icon: icons.notification_icon,
    component: HomeStack,
  },
  {
    id: 4,
    name: 'Settings',
    icon: icons.menu_icon,
    component: HomeStack,
  },
];

export {routes};
