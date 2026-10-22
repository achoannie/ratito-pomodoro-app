import { colors } from "@/theme/theme";
import {Pressable, StyleSheet} from "react-native";
import {markWelcomeSeen} from "@/state/session";
import {router} from "expo-router";


export default function SplashScreen() {
    const enter = () => {
        markWelcomeSeen();
        router.replace('/')
    }

    const styles = StyleSheet.create({
        root: { flex: 1, backgroundColor: colors.bleachedFlax }
    })

    return (
        <Pressable style={styles.root} onPress={enter} >
            {/*<RText*/}
        </Pressable>
    )
}
