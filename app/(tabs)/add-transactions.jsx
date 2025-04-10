import { Alert, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Button from "../../components/Button";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function AddTransactions() {

    const initialForm = {
        description: "",
        value: 0,
        date: new Date(),
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)

    const [showPicker, setShowPicker] = useState(false)

    const addTransaction = () => {
        Alert.alert(`${form.description} , ${form.value} , ${form.date} , ${form.category} `)
        setForm(initialForm)
    }

    const handleCurrencyChange = (text) => {
        const formattedValue = text.replace(/\D/g, "")
        const numberValue = formattedValue ? (parseFloat(formattedValue) / 100) : 0
        setForm({ ...form, value: numberValue })
    }


    const handleDateChange =(_, selectDate)=>{
        setShowPicker(false)
        if(selectDate){
            setForm({...form, date: selectDate})
        }
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
                            value={form.value.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}
                            keyboardType="numeric"
                            onChangeText={handleCurrencyChange}
                            style={globalStyles.input} />
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Data</Text>
                        <TouchableOpacity onPress={() => setShowPicker(true)}>
                            <TextInput
                                value={form.date.toLocaleDateString("pt-BR")}
                                onChangeText={(text) => setForm({ ...form, date: text })}
                                style={globalStyles.input}
                                editable={false} />
                        </TouchableOpacity>
                        {showPicker && (
                            <RNDateTimePicker
                            mode="date"
                            display={Platform.OS === "ios" ? "inline" : "default"}
                            value={form.date}
                            onChange={handleDateChange}
                            />
                        )}
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