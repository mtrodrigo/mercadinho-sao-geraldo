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

const DEFAULT_API_URL = "https://mercadinho-sao-geraldo-api.fly.dev";

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
  try {
    const data = await fetchFromApi<Category[]>("/categories");
    return data;
  } catch {
    return [
      { id: "fresh", name: "Hortifruti", iconUrl: "https://cdn-icons-png.flaticon.com/512/766/766741.png" },
      { id: "butcher", name: "Açougue", iconUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046780.png" },
      { id: "bakery", name: "Padaria", iconUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046751.png" },
      { id: "cleaning", name: "Limpeza", iconUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046766.png" },
    ];
  }
}

export async function fetchPromotions(): Promise<Promotion[]> {
  try {
    const data = await fetchFromApi<Promotion[]>("/promotions");
    return data;
  } catch {
    return [
      {
        id: "welcome",
        title: "Bem-vindo ao Mercadinho São Geraldo",
        description: "Entrega rápida para toda a região do bairro!",
        bannerImageUrl:
          "https://images.unsplash.com/photo-1581550250634-6c2ff0b8d095?auto=format&fit=crop&w=1200&q=60",
      },
    ];
  }
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  try {
    const data = await fetchFromApi<Product[]>("/products/featured");
    return data;
  } catch {
    return [
      {
        id: "banana",
        name: "Banana Nanica",
        price: 5.5,
        unit: "kg",
        promotionBadge: "Oferta",
        imageUrl: "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "picanha",
        name: "Picanha Bovina",
        price: 79.9,
        unit: "kg",
        promotionBadge: "Fresquinho",
        imageUrl: "https://images.unsplash.com/photo-1604908177532-4023ac76d396?auto=format&fit=crop&w=800&q=60",
      },
    ];
  }
}

export async function fetchDailyEssentials(): Promise<Product[]> {
  try {
    const data = await fetchFromApi<Product[]>("/products/essentials");
    return data;
  } catch {
    return [
      {
        id: "pao-frances",
        name: "Pão Francês",
        price: 12.9,
        unit: "kg",
        imageUrl: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "detergente",
        name: "Detergente Limão",
        price: 2.99,
        unit: "unidade",
        imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "cafe",
        name: "Café Torrado",
        price: 18.9,
        unit: "500g",
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60",
      },
    ];
  }
}
