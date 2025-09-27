import { StyleSheet } from "react-native";
import { radius, spacing, typography } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    height: 160,
    borderRadius: radius.lg,
    overflow: "hidden",
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  image: {
    borderRadius: radius.lg,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: spacing.lg,
    justifyContent: "space-between",
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: "#fff",
  },
  description: {
    fontSize: typography.body,
    color: "#f1f5f9",
  },
});
