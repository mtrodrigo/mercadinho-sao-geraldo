import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: colors.text,
  },
  action: {
    fontSize: typography.caption,
    fontWeight: "600",
    color: colors.primary,
  },
});
