import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  textContainer: {
    flex: 1,
    paddingRight: spacing.md,
  },
  greeting: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  addressRow: {
    gap: spacing.xs,
  },
  addressLabel: {
    fontSize: typography.caption,
    color: colors.mutedText,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  addressValue: {
    fontSize: typography.body,
    color: colors.text,
    fontWeight: "600",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: radius.pill,
  },
});
