import { Text, View } from "react-native";
import { styles } from "./styles";

type HeaderProps = {
  userName?: string;
  deliveryAddress?: string;
};

function getInitials(name: string) {
  const parts = name
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    return "CL";
  }

  if (parts.length === 1) {
    const [first] = parts;
    return first.slice(0, 2).toUpperCase();
  }

  const firstInitial = parts[0][0];
  const lastInitial = parts[parts.length - 1][0];
  return `${firstInitial}${lastInitial}`.toUpperCase();
}

function getFirstName(name: string) {
  const trimmed = name.trim();
  if (!trimmed) {
    return "Cliente";
  }

  const [first] = trimmed.split(/\s+/);
  return first;
}

export function Header({ userName = "Maria Souza", deliveryAddress = "Rua São Geraldo, 245" }: HeaderProps) {
  const initials = getInitials(userName);
  const firstName = getFirstName(userName);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Olá, {firstName}</Text>
        <View style={styles.addressRow}>
          <Text style={styles.addressLabel}>Entregando em</Text>
          <Text style={styles.addressValue}>{deliveryAddress}</Text>
        </View>
      </View>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
    </View>
  );
}
