import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Creditos</ThemedText>
      </ThemedView>
      <ThemedText>
        Aplicacion de scraping y modificacion de datos de un router
      </ThemedText>
      <Collapsible title="Como usar esta aplicacion ?">
        <ThemedText type="defaultSemiBold">Pasos:</ThemedText>
        <ThemedText>
          texto
          <ThemedText type="defaultSemiBold">negrita</ThemedText>
          texto
        </ThemedText>
        <ExternalLink href="fmarcos.dev">
          <ThemedText type="link">website del desarrollador</ThemedText>
        </ExternalLink>
        <ThemedText type="defaultSemiBold">
          esta aplicacion es de uso gratuito
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
