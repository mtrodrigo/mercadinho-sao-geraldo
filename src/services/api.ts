export type Category = {
  id: string;
  name: string;
  iconUrl?: string | null;
};

export type Promotion = {
  id: string;
  title: string;
  description?: string | null;
  bannerImageUrl?: string | null;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  unit?: string | null;
  imageUrl?: string | null;
  categoryId?: string | null;
  description?: string | null;
  promotionBadge?: string | null;
};

const DEFAULT_API_URL = "https://mercadinho-sao-geraldo-api.onrender.com";

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? DEFAULT_API_URL;

type FetchOptions = RequestInit & { revalidate?: number };

async function fetchFromApi<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Erro ao carregar ${endpoint}: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn("Não foi possível carregar os dados do endpoint", endpoint, error);
    throw error;
  }
}

export async function fetchCategories(): Promise<Category[]> {
  return fetchFromApi<Category[]>("/categories");
}

export async function fetchPromotions(): Promise<Promotion[]> {
  return fetchFromApi<Promotion[]>("/promotions");
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  return fetchFromApi<Product[]>("/products/featured");
}

export async function fetchDailyEssentials(): Promise<Product[]> {
  return fetchFromApi<Product[]>("/products/essentials");
}
