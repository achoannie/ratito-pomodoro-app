import {StyleSheet, View} from "react-native";
import {RText} from "@/components/ratito/RText";

export default function Themes() {
    return (
        <View style={styles.container}>
            <RText variant="caption" style={styles.text}>Fun themes coming your way.</RText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' }
})