import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Button from "../../components/Button";
import { useState } from "react";

export default function AddTransactions() {

    const initialForm = {
        description: "",
        value: 0,
        date: "",
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)

    const addTransaction = () => {
        Alert.alert(`${form.description} , ${form.value} , ${form.date} , ${form.category} `)
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
                    <View>
                        <Text style={globalStyles.inputLabel}>Valor</Text>
                        <TextInput
                            value={form.value}
                            keyboardType="numeric"
                            onChangeText={(text) => setForm({ ...form, value: text })}
                            style={globalStyles.input} />
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Data</Text>
                        <TextInput
                            value={form.date}
                            onChangeText={(text) => setForm({ ...form, date: text })}
                            style={globalStyles.input} />
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Categoria</Text>
                        <TextInput
                            value={form.category}
                            onChangeText={(text) => setForm({ ...form, category: text })}
                            style={globalStyles.input} />
                    </View>
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
    }
})