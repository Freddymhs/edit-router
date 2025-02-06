import {
  StyleSheet,
  Image,
  Platform,
  TextInput,
  View,
  Text,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useContext } from "react";
import { useAppContext } from "@/components/context";
// import { AppProvider } from "@/components/context";

export default function TabTwoScreen() {
  // const { user, setUser } = useContext(useAppContext);
  const { user } = useAppContext();
  const { setUser } = useAppContext();
  console.log({ user });
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
        <ThemedText type="title">Guia de Configuracion</ThemedText>
      </ThemedView>
      <Collapsible title="Routers Compatibles  ?">
        <ThemedText type="defaultSemiBold">
          ARRIS MODELO TG2492LG-VTR
        </ThemedText>
      </Collapsible>

      {/* <Collapsible title="Como usar esta aplicacion ?">
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
      </Collapsible> */}
      <View className="w-full mb-4">
        <Text> Datos Requeridos: </Text>
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder="Usuario del router"
          value={user.trim()}
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder="Contraseña del router"
        />
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder="www.ip-de-acceso-router.com"
        />
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder="impresora seleccionada"
        />
      </View>
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
