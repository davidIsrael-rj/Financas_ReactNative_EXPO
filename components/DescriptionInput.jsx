import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function DescriptionInput({ form, setForm }) {
    return (
        <View>
            <Text style={globalStyles.inputLabel}>Descrição</Text>
            <TextInput
                value={form.description}
                onChangeText={(text) => setForm({ ...form, description: text })}
                style={globalStyles.input}
            />
        </View>
    )
}