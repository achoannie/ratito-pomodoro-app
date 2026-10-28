import {StyleSheet, View} from "react-native";
import {RText} from "@/components/ratito/RText";

export default function Settings() {
    return (
        <View style={styles.container}>
            <RText variant="caption" style={styles.text}>Account and preferences go here.</RText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' }
})