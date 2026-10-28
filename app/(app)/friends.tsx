import {StyleSheet, View} from "react-native";
import {RText} from "@/components/ratito/RText";

export default function Friends() {
    return (
        <View style={styles.container}>
            <RText variant="caption" style={styles.text}>Study buddies and little notes coming soon.</RText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' }
})