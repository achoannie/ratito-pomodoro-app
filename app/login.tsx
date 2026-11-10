import { useState } from 'react';
import {Pressable, StyleSheet, View, Text as RNText} from 'react-native';
import { Link, router} from 'expo-router';
import { useAuthStore } from '@/state/useAuthStore';
import { InputField } from '@/components/primitives';
import { StyledButton } from '@/components/StyledButton';
import { Stack, Text } from '@/components/primitives';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading, devLogin } = useAuthStore();

  const handleLogin = async () => {
    setError('');
    try {
      await login(email, password);
      router.replace('/');
    } catch {
      setError('Login failed. Check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Stack gap="lg" padding="lg">
        <Text size="xl" weight="bold" align="center">Welcome back</Text>
        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          testID="email-input"
        />
        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          testID="password-input"
          error={error !== '' ? error : undefined}
        />
        <StyledButton
          label="Log in"
          onPress={handleLogin}
          isLoading={isLoading}
          testID="login-button"
        />
        <Link href="/register" style={styles.link} testID="to-register">
          No account yet? Let's sign up
        </Link>
        <Link href="/forgot-password" style={styles.link} testID="forgot-password">
          Wupsi i forgot my password
        </Link>
        <Link href="/forgot-username" style={styles.link} testID="forgot-username">
          Upsi i forgot my username
        </Link>
        {__DEV__ && (
            <Pressable onPress={() => {
              devLogin();
              router.replace('/');
            }}>
              <RNText style={styles.link}>Skip login step for demo (for dev | teacher)</RNText>
            </Pressable>
        )}
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  link: {textAlign: "center", textDecorationLine: 'underline'}
});
