import { Redirect, Stack } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hasSeenWelcome } from '@/state/session';
import { useAuthStore } from '@/state/useAuthStore';
import { RText } from '@/components/ratito/RText';
import { SideMenu } from '@/components/SideMenu';

export default function AppLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const insets = useSafeAreaInsets();

    if (!hasSeenWelcome()) return <Redirect href="/splash" />;
    if (!isAuthenticated) return <Redirect href="/login" />;

    return (
        <View style={styles.root}>
            <Stack screenOptions={{ headerShown: false }} />

            <Pressable
                onPress={() => setMenuOpen(true)}
                hitSlop={12}
                style={[styles.menuButton, { top: insets.top + 16 }]}
            >
                <RText variant="heading">☰</RText>
            </Pressable>

            <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1 },
    menuButton: {
        position: 'absolute',
        left: 24,
        zIndex: 10,
    },
});