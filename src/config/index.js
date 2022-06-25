import {icons} from '../../constants';
import HomeScreen from '../components/HomeScreen';

const routes = [
  {
    id: 1,
    name: 'Home',
    icon: icons.dashboard_icon,
    component: HomeScreen,
  },
  {
    id: 2,
    name: 'Search',
    icon: icons.search_icon,
    component: HomeScreen,
  },
  {
    id: 3,
    name: 'Notification',
    icon: icons.notification_icon,
    component: HomeScreen,
  },
  {
    id: 4,
    name: 'Settings',
    icon: icons.menu_icon,
    component: HomeScreen,
  },
];

export {routes};
