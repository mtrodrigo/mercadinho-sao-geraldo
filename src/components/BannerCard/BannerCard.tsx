import { ImageBackground, Text, View } from "react-native";
import { Promotion } from "../../services/api";
import { styles } from "./styles";

type BannerCardProps = {
  promotion: Promotion;
};

export function BannerCard({ promotion }: BannerCardProps) {
  return (
    <ImageBackground
      source={{
        uri:
          promotion.bannerImageUrl ??
          "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1400&q=60",
      }}
      imageStyle={styles.image}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{promotion.title}</Text>
        {promotion.description ? <Text style={styles.description}>{promotion.description}</Text> : null}
      </View>
    </ImageBackground>
  );
}
