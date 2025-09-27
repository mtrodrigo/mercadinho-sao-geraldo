import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type HeaderProps = {
  userName?: string;
  deliveryAddress?: string;
};

export function Header({ userName = "Olá", deliveryAddress = "Rua São Geraldo, 245" }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>{userName}</Text>
        <View style={styles.addressRow}>
          <Text style={styles.addressLabel}>Entregando em</Text>
          <Text style={styles.addressValue}>{deliveryAddress}</Text>
        </View>
      </View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=60",
        }}
        style={styles.avatar}
      />
    </View>
  );
}
