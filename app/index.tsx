import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Mercadinho São Geraldo</Text>
        <Text style={styles.subtitle}>
          Agora com suporte completo para Expo Go e para o navegador.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1A1A1A",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#38434D",
  },
});
