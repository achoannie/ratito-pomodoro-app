import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { useAuthStore } from '@/state/useAuthStore';
import { useSettingsStore } from '@/state/useSettingsStore';
import { PETS } from '@/pets/pets';
import { colors, textStyles } from '@/theme/theme';

const strawberry = require('../../assets/icons/strawberry.png');

export default function Settings() {
    const { user, logout } = useAuthStore();
    const { muted, volume, toggleMute, setVolume } = useSettingsStore();
    const level = Math.round(volume * 5);

    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
            <Text style={styles.title}> ୨୧ Settings ୨୧</Text>

            {/* Account */}
            <Text style={styles.sectionLabel}>✿ account</Text>
            <View style={styles.card}>
                <View style={styles.profileRow}>
                    <View style={styles.avatar}>
                        <Image source={PETS.perrito.gifs.idle} style={styles.avatarPet} contentFit="contain" />
                    </View>
                    <View style={styles.profileText}>
                        <Text style={textStyles.heading}>{user?.name ?? 'friend'}</Text>
                        <Text style={textStyles.caption}>{user?.email}</Text>
                    </View>
                </View>
            </View>

            {/* Sound */}
            <Text style={styles.sectionLabel}>✿ sound</Text>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={textStyles.body}>Sound effects</Text>
                    <Switch
                        value={!muted}
                        onValueChange={toggleMute}
                        trackColor={{ true: colors.plasticPorcelain, false: '#d9cfc0' }}
                        thumbColor={colors.arterialNocturne}
                        {...({ activeThumbColor: colors.arterialNocturne } as object)}
                    />
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <Text style={textStyles.body}>Volume</Text>
                    <View style={[styles.berries, muted && { opacity: 0.3 }]}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <Pressable key={i} onPress={() => setVolume((i + 1) / 5)} disabled={muted} hitSlop={4}>
                                <Image source={strawberry} style={[styles.berry, i >= level && { opacity: 0.25 }]} />
                            </Pressable>
                        ))}
                    </View>
                </View>
            </View>

            <Pressable style={styles.logout} onPress={logout}>
                <Text style={textStyles.heading}>Log out</Text>
            </Pressable>
            <Text style={styles.footer}>Ratito v0.1 ♡ made with achoannie</Text>
        </ScrollView>
    );
}

const pixelShadow = {
    shadowColor: colors.arterialNocturne,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,          // 0 = hard edge, like pixel art
};

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.bleachedFlax },
    content: { width: '100%', maxWidth: 420, alignSelf: 'center', padding: 24, paddingTop: 80, gap: 8 },
    title: { ...textStyles.title, textAlign: 'center', marginBottom: 16 },
    sectionLabel: { ...textStyles.caption, marginTop: 12, marginLeft: 4, textTransform: 'uppercase', letterSpacing: 1 },
    card: {
        backgroundColor: colors.cream,
        borderWidth: 2,
        borderColor: colors.arterialNocturne,
        borderRadius: 10,
        padding: 16,
        ...pixelShadow,
    },
    profileRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
    avatar: {
        width: 72, height: 72, borderRadius: 36,
        backgroundColor: colors.siliconMist, borderWidth: 2, borderColor: colors.arterialNocturne,
        alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    },
    avatarPet: { width: 64, height: 64 },
    profileText: { flex: 1, gap: 2 },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', minHeight: 40 },
    divider: { height: 1, backgroundColor: colors.arterialNocturne, opacity: 0.15, marginVertical: 8 },
    berries: { flexDirection: 'row', gap: 4 },
    berry: { width: 32, height: 32 },
    logout: {
        alignSelf: 'center', marginTop: 28, paddingVertical: 12, paddingHorizontal: 40,
        backgroundColor: colors.plasticPorcelain, borderWidth: 2, borderColor: colors.arterialNocturne,
        borderRadius: 28, ...pixelShadow,
    },
    footer: { ...textStyles.caption, textAlign: 'center', marginTop: 16 },
});