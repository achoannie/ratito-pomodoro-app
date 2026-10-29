import {Image, Text, View} from "react-native";
import {StyleSheet} from "react-native";
import {colors, fonts} from "@/theme/theme";

export function StrawberryCounter({amount}: {amount: number}) {
    return (
        <View style={styles.wrap} accessibilityLabel={`${amount} strawberries`}>
            <View style={styles.tag}>
                <Text style={styles.amount}>{amount}</Text>
            </View>
            <Image source={require('../../../assets/icons/strawberry.png')} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: { flexDirection: 'row', alignItems: 'center' },
    tag: {
        marginLeft: 16,
        paddingLeft: 24,
        paddingRight: 12,
        height: 28,
        minWidth: 64,
        justifyContent: 'center',
        alignItems: 'flex-end',  // number aligned right
        backgroundColor: colors.cream,
        borderWidth: 2,
        borderColor: colors.berryInk,
        borderRadius: 6,
    },
    amount: { color: colors.berryInk, fontFamily: fonts.grapeSoda },
    icon: { position: 'absolute', left: 0, width: 32, height: 32 },
});