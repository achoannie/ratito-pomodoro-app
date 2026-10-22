import { Image, Pressable, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { colors } from "@/theme/theme";
import { markWelcomeSeen } from "@/state/session";
import { RText } from "@/components/ratito/RText";

export default function SplashScreen() {
    const enter = () => {
        markWelcomeSeen();
        router.replace('/');
    };

    return (
        <Pressable style={styles.root} onPress={enter}>
            <RText variant="sTitle">focus un</RText>
            <RText variant="title">Ratito</RText>

            <View style={styles.pets}>
                <Image source={require('../assets/pets/dog.png')} style={styles.pet} resizeMode={"contain"} />
                <Image source={require('../assets/pets/cat.png')} style={styles.pet} resizeMode={"contain"} />
            </View>

            <RText variant="caption" style={styles.hint}>tap anywhere to begin</RText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: colors.bleachedFlax,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pets: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 4,
        marginTop: 40
    },
    pet:  { width: 140, height: 120 },
    hint: {
        position: 'absolute',
        bottom: 60,
        opacity: 0.7,
    },
});