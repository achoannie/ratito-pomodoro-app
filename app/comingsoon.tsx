import {StyleSheet, View} from "react-native";
import {RText} from "@/components/ratito/RText";

export default function Comingsoon() {
    return (
        <View style={styles.container}>
            <RText variant="caption" style={styles.text}>Coming soon ( ˘ω˘ ) work in progress!</RText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' }
})