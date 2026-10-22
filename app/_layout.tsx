import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts} from "expo-font";
import {dafonts} from "@/theme/theme";

export default function RootLayout() {
    const [fontsLoaded] = useFonts(dafonts)

    if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Slot />
    </SafeAreaProvider>
  );
}