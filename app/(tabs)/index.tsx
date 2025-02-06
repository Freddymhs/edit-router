import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { listMissingValues } from "@/components/constants.js";
import ModalScraping from "@/components/modalScraping";

export default function HomeScreen() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const printActualQr = () => {
    console.log("print actual qr");
  };
  const printQrText = "Imprimir QR";

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo-img.png")}
          style={styles.reactLogo}
          resizeMode="cover"
        />
      }
    >
      <View className="flex-row justify-between ">
        <Text className="text-black font-extrabold text-center">OPCIONES:</Text>
        <Pressable
          className="bg-black  text-white font-bold py-2 px-4 rounded"
          onPress={() => printActualQr()}
        >
          <Text className="text-white font-bold text-center">
            {printQrText}
          </Text>
        </Pressable>
      </View>

      <View>
        <ModalScraping />
        {/* <Pressable
          className="bg-black  text-white py-2 px-4 rounded"
          onPress={() => printActualQr()}
        >
          <Text className="text-white font-bold text-center">a</Text>
        </Pressable> */}
      </View>
      <View>
        <Text>
          Guia de uso del
          <Text className="font-bold"> Bot</Text>:
        </Text>
        <Text>
          <Text className="font-bold">1.</Text> El bot usará estos datos para
          acceder al router
          <Text className="font-bold"> (ver routers compatibles)</Text>.
        </Text>
        <Text>
          <Text className="font-bold">2.</Text> Editará el usuario y contraseña
          del router.
        </Text>
        <Text>
          <Text className="font-bold">3.</Text> Recibirá el acceso en QR listo
          para imprimir.
        </Text>
      </View>

      <View>
        <Text>
          Complete los <Text className="font-bold ">datos faltantes</Text> del
          router en
          <Text className="font-bold "> Configuraciones</Text>:
        </Text>
        {listMissingValues.map((item, index) => {
          return (
            <View key={index}>
              <Text className="text-red-500"> ❌ {item.message}</Text>
            </View>
          );
        })}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    width: "100%",
    height: "100%",
  },
});
