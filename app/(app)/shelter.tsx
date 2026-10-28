import {StyleSheet, View} from "react-native";
import {RText} from "@/components/ratito/RText";

export default function Shelter() {
    return (
        <View style={styles.container}>
            <RText variant="caption" style={styles.text}>All your pets' living room is being built.</RText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' }
})