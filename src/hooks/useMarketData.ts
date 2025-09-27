import { useEffect, useState } from "react";
import { Category, Product, fetchCategories, fetchDailyEssentials, fetchFeaturedProducts } from "../services/api";

type MarketData = {
  categories: Category[];
  featured: Product[];
  essentials: Product[];
  isLoading: boolean;
  hasError: boolean;
};

export function useMarketData() {
  const [data, setData] = useState<MarketData>({
    categories: [],
    featured: [],
    essentials: [],
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const [categories, featured, essentials] = await Promise.all([
          fetchCategories(),
          fetchFeaturedProducts(),
          fetchDailyEssentials(),
        ]);

        if (!isMounted) return;

        setData({
          categories,
          featured,
          essentials,
          isLoading: false,
          hasError: false,
        });
      } catch (error) {
        if (!isMounted) return;
        setData((previous) => ({
          ...previous,
          isLoading: false,
          hasError: true,
        }));
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}
