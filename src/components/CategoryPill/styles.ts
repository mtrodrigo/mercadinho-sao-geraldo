import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.cardBackground,
    borderRadius: radius.pill,
    borderColor: colors.border,
    borderWidth: 1,
    gap: spacing.sm,
  },
  active: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    fontSize: typography.caption,
    fontWeight: "600",
    color: colors.text,
  },
  activeLabel: {
    color: "#fff",
  },
  icon: {
    width: 24,
    height: 24,
  },
  placeholder: {
    width: 24,
    height: 24,
    borderRadius: radius.pill,
    backgroundColor: colors.border,
  },
});
