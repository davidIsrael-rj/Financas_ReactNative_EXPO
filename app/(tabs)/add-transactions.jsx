import { Alert, Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";

import { globalStyles } from "../../styles/globalStyles";
import Button from "../../components/Button";
import CategoryPicker from "../../components/CategoryPicker";
import DatePicker from "../../components/DatePicker";
import CurrencyInput from "../../components/CurrencyInput";
import DescriptionInput from "../../components/DescriptionInput";

const initialForm = {
    description: "",
    value: 0,
    date: new Date(),
    category: "income"
}
export default function AddTransactions() {

    const [form, setForm] = useState(initialForm)

    const addTransaction = () => {
        Alert.alert(`${form.description} , ${form.value} , ${form.date} , ${form.category} `)
        setForm(initialForm)
    }

    return (
        <KeyboardAvoidingView style={globalStyles.screenContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={globalStyles.content}>
                    <View style={globalStyles.form}>
                        <DescriptionInput form={form} setForm={setForm} />
                        <CurrencyInput form={form} setForm={setForm} />
                        <DatePicker form={form} setForm={setForm} />
                        <CategoryPicker form={form} setForm={setForm} />
                    </View>
                    <Button onPress={addTransaction}>Adicionar</Button>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}