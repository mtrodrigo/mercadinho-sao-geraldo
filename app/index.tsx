import { SafeAreaView, StatusBar } from "react-native";
import { HomeScreen } from "../src/screens/Home/HomeScreen";
import { colors } from "../src/theme/colors";

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <HomeScreen />
    </SafeAreaView>
  );
}
