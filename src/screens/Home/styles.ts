import { StyleSheet } from "react-native";
import { colors, spacing } from "../../theme/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionSpacing: {
    marginBottom: spacing.xl,
  },
  categoriesList: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  featuredList: {
    paddingHorizontal: spacing.lg,
  },
  highlightsContainer: {
    paddingHorizontal: spacing.lg,
  },
  essentialsContainer: {
    paddingHorizontal: spacing.lg,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    justifyContent: "space-between",
  },
  loading: {
    marginTop: spacing.md,
  },
  errorMessage: {
    color: colors.mutedText,
    textAlign: "center",
    marginTop: spacing.md,
  },
  emptyState: {
    width: "100%",
    textAlign: "center",
    color: colors.mutedText,
    marginTop: spacing.lg,
  },
});
