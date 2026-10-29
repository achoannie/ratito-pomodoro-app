import {Redirect, Stack} from 'expo-router';
import {hasSeenWelcome} from "@/state/session";
import {useAuthStore} from "@/state/useAuthStore";

export default function AppLayout() {
  // Uncomment when you implement Supabase authentication:
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!hasSeenWelcome()) return <Redirect href="/splash" />
  if (!isAuthenticated) return <Redirect href="/login" />;
  return <Stack screenOptions={({headerShown: false})}/>;
}
