import {StyleSheet, View} from "react-native";
import ComingSoon from "@/components/ratito/ComingSoon";

export default function Profile() {
    return (
        <View style={styles.container}>
            <ComingSoon message={`Your stats and cozy profile will live here.`}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' },
    gif: { width: 200, height: 200 },
})