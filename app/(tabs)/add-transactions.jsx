import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Button from "../../components/Button";

export default function AddTransactions() {

    const addTransaction = () => {
        Alert.alert("Bom dia!!")
    }
    return (
        <SafeAreaView style={globalStyles.screenContainer}>
            <ScrollView style={globalStyles.content}>
                <View style={styles.form}>
                    <View>
                        <Text style={globalStyles.inputLabel}>Descrição</Text>
                        <TextInput style={globalStyles.input} />
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Valor</Text>
                        <TextInput style={globalStyles.input} />
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Data</Text>
                        <TextInput style={globalStyles.input} />
                    </View>
                    <View>
                        <Text style={globalStyles.inputLabel}>Categoria</Text>
                        <TextInput style={globalStyles.input} />
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