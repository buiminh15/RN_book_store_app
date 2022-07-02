import {icons} from '../../constants';
import {HomeScreen} from '../components';
import HomeStack from '../navigation/HomeStack';

const routes = [
  {
    id: 1,
    name: 'HomeStack',
    icon: icons.dashboard_icon,
    component: HomeScreen,
  },
  {
    id: 2,
    name: 'SearchStack',
    icon: icons.search_icon,
    component: HomeScreen,
  },
  {
    id: 3,
    name: 'NotificationStack',
    icon: icons.notification_icon,
    component: HomeScreen,
  },
  {
    id: 4,
    name: 'SettingsStack',
    icon: icons.menu_icon,
    component: HomeScreen,
  },
];

export {routes};
