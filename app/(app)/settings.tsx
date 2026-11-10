import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuthStore } from '@/state/useAuthStore';
import { colors, fonts } from '@/theme/theme';

export default function Settings() {
    const { user, logout } = useAuthStore();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Logged in as</Text>
                <Text style={styles.value}>{user?.name ?? 'friend'}</Text>
                <Text style={styles.email}>{user?.email}</Text>
            </View>

            <Pressable onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Log out</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bleachedFlax, padding: 24, paddingTop: 80, gap: 24 },
    title: { fontFamily: fonts.grapeSoda, fontSize: 34, color: colors.arterialNocturne, textAlign: 'center' },
    card: {
        padding: 16, gap: 4, borderRadius: 16, borderWidth: 2,
        borderColor: colors.arterialNocturne, backgroundColor: colors.siliconMist,
    },
    label: { fontSize: 12, color: colors.arterialNocturne, opacity: 0.7 },
    value: { fontFamily: fonts.grapeSoda, fontSize: 22, color: colors.arterialNocturne },
    email: { fontSize: 14, color: colors.arterialNocturne },
    button: {
        alignSelf: 'center', minWidth: 160, paddingVertical: 12, alignItems: 'center', borderRadius: 28,
        borderWidth: 2, borderColor: colors.arterialNocturne, backgroundColor: colors.plasticPorcelain,
    },
    buttonText: { fontFamily: fonts.grapeSoda, fontSize: 22, color: colors.arterialNocturne },
});