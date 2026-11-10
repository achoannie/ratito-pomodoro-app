import {StyleSheet, View} from "react-native";
import {RText} from "@/components/ratito/RText";
import {Image} from "expo-image";

export default function Friends() {
    return (
        <View style={styles.container}>
            <RText variant="caption" style={styles.text}>Study buddies and little notes coming soon.</RText>
            <Image source={require('../../assets/temporaries/pikachuunderconstruction.gif')}
                   style={styles.gif} contentFit="contain"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' },
    gif: { width: 200, height: 200 },
})