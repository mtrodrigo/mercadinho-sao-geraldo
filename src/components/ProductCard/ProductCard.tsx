import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../services/api";
import { styles } from "./styles";

type ProductCardProps = {
  product: Product;
  onPress?: (product: Product) => void;
};

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={() => onPress?.(product)}>
      {product.promotionBadge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{product.promotionBadge}</Text>
        </View>
      ) : null}

      {product.imageUrl ? (
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>{product.name.slice(0, 2).toUpperCase()}</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        {product.description ? (
          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>
        ) : null}
        <View style={styles.priceRow}>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          {product.unit ? <Text style={styles.unit}>/{product.unit}</Text> : null}
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Feather name="shopping-cart" size={18} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
