import { useAuthStore } from '@/state/useAuthStore';
import { Screen } from '@/components/primitives';
import { Stack } from '@/components/primitives';
import { Text } from '@/components/primitives';
import { EmptyState } from '@/components/primitives';
import { StyledButton } from '@/components/StyledButton';
import {Badge} from "@/components/primitives";
import {router} from "expo-router";

export default function HomeScreen() {
  const { user, logout } = useAuthStore();

  return (
    <Screen padding="lg">
      <Stack gap="lg">
        <Text size="xl" weight="bold">
          {user !== null ? `Welcome, ${user.name}` : 'Welcome'}
        </Text>
        <Text>Your items will appear here once you connect Supabase.</Text>
        <Badge label={'Succes badge'} variant={"success"} />
        <EmptyState
          title="No items yet"
          description="Implement getItems() in your itemService to load data."
        />
        <StyledButton label="Log out" onPress={logout} variant="secondary" />
      </Stack>
      <StyledButton
          label="Test button: back to splash screen"
          variant="secondary"
          onPress={() => router.push('/splash')}
      />
    </Screen>
  );
}

