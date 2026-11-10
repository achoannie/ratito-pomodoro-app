import {StyleSheet, View, Text} from "react-native";
import {RText} from "@/components/ratito/RText";
import {Image} from "expo-image";
import {Href, Link} from "expo-router";

export default function ComingSoon({message, backHref}: {message: string; backHref?: Href}) {
    const under_construction = require("../../../assets/temporaries/pikachuunderconstruction.gif");
    return (
        <View style={styles.container}>
            <RText variant="caption" style={styles.text}>{message}</RText>
            <Image source={(under_construction)} style={styles.gif} contentFit="contain" />
            {backHref !== undefined && (
                <Link href={backHref} style={styles.back}>
                    ✩₊˚୨☆ <Text style={styles.underline}>back</Text> ☆୧˚₊✩
                </Link>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { textAlign: 'center' },
    gif: { width: 200, height: 200 },
    back: {marginTop: 8},
    underline: {textDecorationLine: 'underline'}
})