import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cardBackground,
    borderRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: radius.lg,
    backgroundColor: "rgba(47, 107, 255, 0.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.text,
  },
  description: {
    fontSize: typography.caption,
    color: colors.mutedText,
  },
});
