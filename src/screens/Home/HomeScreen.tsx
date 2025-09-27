import { useMemo, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { BannerCard } from "../../components/BannerCard/BannerCard";
import { CategoryPill } from "../../components/CategoryPill/CategoryPill";
import { Header } from "../../components/Header/Header";
import { InfoRow } from "../../components/InfoRow/InfoRow";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useMarketData } from "../../hooks/useMarketData";
import { Product } from "../../services/api";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export function HomeScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { categories, promotions, featured, essentials, isLoading, hasError } = useMarketData();

  const filteredEssentials = useMemo(() => {
    const query = search.toLowerCase();
    return essentials.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(query);
      const matchesCategory = selectedCategory ? product.categoryId === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [essentials, search, selectedCategory]);

  const handleProductPress = (product: Product) => {
    console.log("Produto selecionado:", product.name);
  };

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <Header userName="Olá, Maria" />

      <View style={styles.searchContainer}>
        <SearchBar value={search} onChangeText={setSearch} />
      </View>

      <View style={styles.sectionSpacing}>
        <SectionTitle title="Categorias" actionLabel="Ver todas" />
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoriesList}
          renderItem={({ item }) => (
            <CategoryPill
              label={item.name}
              iconUrl={item.iconUrl}
              isActive={selectedCategory === item.id}
              onPress={() => setSelectedCategory((previous) => (previous === item.id ? null : item.id))}
            />
          )}
        />
      </View>

      {promotions.map((promotion) => (
        <BannerCard key={promotion.id} promotion={promotion} />
      ))}

      <View style={styles.sectionSpacing}>
        <SectionTitle title="Ofertas especiais" actionLabel="Ver mais" />
        <FlatList
          data={featured}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} onPress={handleProductPress} />}
        />
      </View>

      <View style={[styles.sectionSpacing, styles.highlightsContainer]}>
        <SectionTitle title="Vantagens do Mercadinho" />
        <InfoRow icon="clock" title="Entrega rápida" description="Receba suas compras no mesmo dia" />
        <InfoRow icon="smile" title="Equipe atenciosa" description="Fale com a gente pelo WhatsApp" />
        <InfoRow icon="gift" title="Clube de vantagens" description="Ganhe descontos a cada compra" />
      </View>

      <View style={[styles.sectionSpacing, styles.essentialsContainer]}>
        <SectionTitle title="Essenciais do dia" actionLabel="Adicionar tudo" />
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.primary} style={styles.loading} />
        ) : hasError ? (
          <Text style={styles.errorMessage}>
            Tivemos um problema para carregar os produtos. Tente novamente mais tarde.
          </Text>
        ) : (
          <View style={styles.grid}>
            {filteredEssentials.map((product) => (
              <ProductCard key={product.id} product={product} onPress={handleProductPress} />
            ))}
            {filteredEssentials.length === 0 ? (
              <Text style={styles.emptyState}>Nenhum produto encontrado com esse filtro.</Text>
            ) : null}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
