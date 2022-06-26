import { createStackNavigator } from '@react-navigation/stack';
import { DetailBook, HomeScreen } from '../components';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailBook" component={DetailBook} />
    </Stack.Navigator>
  );
}