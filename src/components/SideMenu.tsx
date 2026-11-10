import {Href, router} from "expo-router";
import { useRef, useEffect} from "react";
import { colors } from "@/theme/theme";
import {StyleSheet, Animated, Modal, Pressable, View, Platform} from "react-native";
import {RText} from "@/components/ratito/RText";
import {useSafeAreaInsets} from "react-native-safe-area-context";
const WIDTH = 240;
export const MENU_ITEMS: {label: string, icon: string, href: Href}[] =[
    { label: 'Focus', icon: '⏳', href: '/' },
    { label: 'Profile', icon: '🌼', href: '/profile' },
    { label: 'Shelter', icon: '🏡', href: '/shelter' },
    { label: 'Friends', icon: '💌', href: '/friends' },
    { label: 'Themes', icon: '🎨', href: '/themes' },
    { label: 'Settings', icon: '⚙︎', href: '/settings' },
]
interface SideMenuProps {
    open: boolean;
    onClose: () => void;
}

export function SideMenu({open, onClose}: SideMenuProps) {
    const insets = useSafeAreaInsets();
    const x = useRef(new Animated.Value(-WIDTH)).current;
    useEffect(() => {
        Animated.timing(x, {
            toValue: open ? 0 : -WIDTH,
            duration: 260,
            useNativeDriver: Platform.OS !== 'web',
        }).start();
    }, [open, x]);

    const go = (href: Href) => {
        onClose();
        router.navigate(href);
    };
    return (
        <Modal visible={open} transparent animationType={"fade"} onRequestClose={onClose}>
            <Pressable style={styles.scrim} onPress={onClose} testID='menu-scrim' />
            <View style={[styles.panel, { paddingTop: insets.top + 32 }]}>
                {MENU_ITEMS.map((item) => (
                    <Pressable key={item.label} onPress={() => go(item.href)} testID={`menu-${item.label.toLowerCase()}`}>
                        <RText variant='body' style={styles.icon}>{item.icon}</RText>
                        <RText variant='heading'>{item.label}</RText>
                    </Pressable>

                ))}
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(74,59,51,0.25)' },
    panel: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: WIDTH,
        paddingHorizontal: 24,
        backgroundColor: colors.bleachedFlax,
        borderRightWidth: 2,
        borderColor: colors.arterialNocturne,
    },
    item: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 8 },
    icon: { width: 28 },
});