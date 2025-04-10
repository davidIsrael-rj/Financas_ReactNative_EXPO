import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { useState } from "react";

import Button from "../../components/Button";
import CategoryPicker from "../../components/CategoryPicker";
import DatePicker from "../../components/DatePicker";
import CurrencyInput from "../../components/CurrencyInput";

export default function AddTransactions() {

    const initialForm = {
        description: "",
        value: 0,
        date: new Date(),
        category: "income"
    }

    const [form, setForm] = useState(initialForm)

    const addTransaction = () => {
        Alert.alert(`${form.description} , ${form.value} , ${form.date} , ${form.category} `)
        setForm(initialForm)
    }

    return (
        <SafeAreaView style={globalStyles.screenContainer}>
            <ScrollView style={globalStyles.content}>
                <View style={styles.form}>
                    <View>
                        <Text style={globalStyles.inputLabel}>Descrição</Text>
                        <TextInput
                            value={form.description}
                            onChangeText={(text) => setForm({ ...form, description: text })}
                            style={globalStyles.input}
                        />
                    </View>
                    <CurrencyInput form={form} setForm={setForm} />
                    <DatePicker form={form} setForm={setForm} />
                    <CategoryPicker form={form} setForm={setForm} />
                </View>
                <Button onPress={addTransaction}>Adicionar</Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    form: {
        gap: 12,
        marginBottom: 40,
        marginTop: 10,
    },
})