import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Picture from './src/Picture';
import Profile from './src/Profile';
import SignUp from './src/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{
          headerStyle: {
            backgroundColor: '#ff8c1a',
          }
        }} />
        <Stack.Screen name="Picture" component={Picture} options={{
          headerStyle: {
            backgroundColor: '#ff8c1a',
          }
        }} />
        <Stack.Screen name="Profile" component={Profile} options={{
          headerStyle: {
            backgroundColor: '#ff8c1a',
          }
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerStyle: {
            backgroundColor: '#ff8c1a',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
