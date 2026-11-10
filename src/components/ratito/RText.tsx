import React from "react";
import {StyleProp, StyleSheet, Text, TextStyle} from "react-native";
import {fonts, colors} from "@/theme/theme";

type Variant =
    | 'title'    // app name on splash
    | 'heading'  // page titles
    | 'timer'    // countdown
    | 'sTitle'     // speech bubbles, small labels
    | 'body'     // normal text
    | 'caption'; // hints, small info

export function RText({children, variant = "body", style} : {
    children: React.ReactNode,
    variant?: Variant
    style?: StyleProp<TextStyle>;
}) {
    return <Text style={[styles[variant], style]}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {fontFamily: fonts.kiwiSoda, fontSize: 60, color: colors.arterialNocturne},
    heading: {},
    timer: {},
    sTitle: {fontFamily: fonts.kiwiSoda, fontSize: 40, color: colors.pomegranate},
    body: {fontFamily: fonts.bodyF, fontSize: 20, color: colors.siliconMist},
    caption: {
        fontFamily: fonts.grapeSoda,
        fontSize: 20,
        lineHeight: 22,
        paddingBottom: 2,
        color: colors.chlorophyllVoid
    }
})