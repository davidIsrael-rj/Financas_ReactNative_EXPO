import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const globalStyles = StyleSheet.create({
    screenContainer:{
        display: "flex",
        flex: 1,
    },
    content: {
        gap: 12,
        paddingVertical:12,
        paddingHorizontal:20
    },
    input:{
        height: 44,
        paddingHorizontal: 16,
        borderColor: colors.secondaryText,
        borderWidth:1,
        borderRadius: 8,
        flexGrow: 1
    },
    inputLabel:{
        fontSize: 16,
        color: colors.primaryText,
        marginBottom: 4
    },
    form: {
        gap: 12,
        marginBottom: 40,
        marginTop: 10,
    },
    line:{
        backgroundColor: colors.secondaryText,
        height:1
    },
    primaryText:{
        fontSize: 16,
        color: colors.primaryText
    },
    secondaryText:{
        fontSize: 12,
        color: colors.secondaryText
    },
    positiveText:{
        fontSize:16,
        color: colors.positiveText
    },
    negativeText: {
        fontSize: 16,
        color: colors.negativesText
    }
})