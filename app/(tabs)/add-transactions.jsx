import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import { useContext, useRef, useState } from "react";

import { globalStyles } from "../../styles/globalStyles";
import Button from "../../components/Button";
import CategoryPicker from "../../components/CategoryPicker";
import DatePicker from "../../components/DatePicker";
import CurrencyInput from "../../components/CurrencyInput";
import DescriptionInput from "../../components/DescriptionInput";
import { MoneyContext } from "../../contexts/GlobalState";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialForm = {
    description: "",
    value: 0,
    date: new Date(),
    category: "income"
}
export default function AddTransactions() {

    const [form, setForm] = useState(initialForm)
    const [transactions, setTransactions] = useContext(MoneyContext)
    const valueInputRef = useRef()

    const setAsyncStorage = async (data) =>{
        try{
            await AsyncStorage.setItem("transactions", JSON.stringify(data))
        }catch(e){
            console.log(e)
        }
    }


    const addTransaction = async () => {
        const newTransaction = {id: transactions.lenght + 1, ...form}
        const updatedTransactions = [...transactions, newTransaction]
        setTransactions(updatedTransactions)
        setForm(initialForm)
        await setAsyncStorage(updatedTransactions)
        Alert.alert("Transação adicionada com sucesso!")
    }

    return (
        <KeyboardAvoidingView style={globalStyles.screenContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={globalStyles.content}>
                    <View style={globalStyles.form}>
                        <DescriptionInput form={form} setForm={setForm} valueInputRef={valueInputRef} />
                        <CurrencyInput form={form} setForm={setForm} valueInputRef={valueInputRef}/>
                        <DatePicker form={form} setForm={setForm} />
                        <CategoryPicker form={form} setForm={setForm} />
                    </View>
                    <Button onPress={addTransaction}>Adicionar</Button>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}