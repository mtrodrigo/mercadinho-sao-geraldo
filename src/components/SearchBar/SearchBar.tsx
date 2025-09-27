import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

type SearchBarProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChangeText, placeholder = "Buscar produtos fresquinhos" }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Feather name="search" color={colors.mutedText} size={20} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.mutedText}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        returnKeyType="search"
      />
    </View>
  );
}
