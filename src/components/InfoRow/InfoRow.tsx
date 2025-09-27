import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

type InfoRowProps = {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  description: string;
};

export function InfoRow({ icon, title, description }: InfoRowProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Feather name={icon} size={18} color={colors.primary} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
