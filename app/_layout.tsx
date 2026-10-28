import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts} from "expo-font";
import {dafonts} from "@/theme/theme";
import { StyledButton } from '@/components/StyledButton';
import {router} from "expo-router";

export default function RootLayout() {
    const [fontsLoaded] = useFonts(dafonts)

    if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Slot />
    <StyledButton
        label="Test button: back to splash screen"
        variant="secondary"
        onPress={() => router.push('/splash')}
    />
    </SafeAreaProvider>
  );
}