import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/auth/Login';
import Index from './src/auth/Index';
import Feed from './src/auth/Feed';

export default function App() {
  return (
    //<Login/>
    //<Index />
    <Feed/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
