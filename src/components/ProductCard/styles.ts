import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: colors.cardBackground,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginRight: spacing.md,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    zIndex: 1,
  },
  badgeText: {
    fontSize: typography.caption,
    fontWeight: "700",
    color: colors.text,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: radius.md,
    marginBottom: spacing.md,
  },
  placeholder: {
    width: "100%",
    height: 120,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    backgroundColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: colors.mutedText,
    textTransform: "uppercase",
  },
  info: {
    gap: spacing.xs,
  },
  name: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.text,
  },
  description: {
    fontSize: typography.caption,
    color: colors.mutedText,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: spacing.xs / 2,
  },
  price: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: colors.primaryDark,
  },
  unit: {
    fontSize: typography.caption,
    color: colors.mutedText,
  },
  button: {
    position: "absolute",
    right: spacing.md,
    bottom: spacing.md,
    backgroundColor: colors.primary,
    width: 38,
    height: 38,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
  },
});
