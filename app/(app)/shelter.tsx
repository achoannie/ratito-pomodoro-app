import {StyleSheet, View} from "react-native";
import ComingSoon from "@/components/ratito/ComingSoon";

export default function Shelter() {
    return (
        <View style={styles.container}>
            <ComingSoon message={`All your pets' living room is being built.`}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' },
    gif: { width: 200, height: 200 },
})