import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type SectionTitleProps = {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export function SectionTitle({ title, actionLabel, onPressAction }: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? (
        <TouchableOpacity onPress={onPressAction}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
