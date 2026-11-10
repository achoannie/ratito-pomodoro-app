import { Redirect, Stack } from 'expo-router';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hasSeenWelcome } from '@/state/session';
import { useAuthStore } from '@/state/useAuthStore';
import { SideMenu } from '@/components/SideMenu';
import {colors} from "@/theme/theme";


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
                style={[styles.menuButton, { top: insets.top + 12 }]}
                accessibilityLabel="Open menu"
            >
                <Text style={styles.menuIcon}>☰</Text>
            </Pressable>

            <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1 },
    menuButton: {
        position: 'absolute',
        left: 16,
        zIndex: 10,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIcon: { fontSize: 32, color: colors.arterialNocturne },
});