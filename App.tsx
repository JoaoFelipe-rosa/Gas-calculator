import { StyleSheet, Text, View } from 'react-native';
import './global.css';
import { ScreenContent } from 'components/ScreenContent';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      <View className="flex-1 items-center justify-center bg-white">
        <ScreenContent />
      </View>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
