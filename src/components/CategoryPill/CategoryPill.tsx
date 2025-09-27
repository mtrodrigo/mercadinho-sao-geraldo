import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

type CategoryPillProps = {
  label: string;
  iconUrl?: string | null;
  isActive?: boolean;
  onPress?: () => void;
};

export function CategoryPill({ label, iconUrl, isActive = false, onPress }: CategoryPillProps) {
  return (
    <TouchableOpacity style={[styles.container, isActive && styles.active]} onPress={onPress}>
      {iconUrl ? <Image source={{ uri: iconUrl }} style={styles.icon} /> : <View style={styles.placeholder} />}
      <Text style={[styles.label, isActive && styles.activeLabel]}>{label}</Text>
    </TouchableOpacity>
  );
}
