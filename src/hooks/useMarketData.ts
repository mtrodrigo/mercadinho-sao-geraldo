import { useEffect, useState } from "react";
import {
  Category,
  Product,
  Promotion,
  fetchCategories,
  fetchDailyEssentials,
  fetchFeaturedProducts,
  fetchPromotions,
} from "../services/api";

type MarketData = {
  categories: Category[];
  promotions: Promotion[];
  featured: Product[];
  essentials: Product[];
  isLoading: boolean;
  hasError: boolean;
};

export function useMarketData() {
  const [data, setData] = useState<MarketData>({
    categories: [],
    promotions: [],
    featured: [],
    essentials: [],
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const [categories, promotions, featured, essentials] = await Promise.all([
          fetchCategories(),
          fetchPromotions(),
          fetchFeaturedProducts(),
          fetchDailyEssentials(),
        ]);

        if (!isMounted) return;

        setData({
          categories,
          promotions,
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
