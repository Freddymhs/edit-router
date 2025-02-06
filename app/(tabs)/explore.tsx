import {
  StyleSheet,
  Image,
  Platform,
  TextInput,
  View,
  Text,
  Alert,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useContext, useEffect, useState } from "react";
import { useAppContext } from "@/components/context";
import { Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveDataTxt } from "@/components/constants.js";
// import { AppProvider } from "@/components/context";

export default function TabTwoScreen() {
  const retrieveData = async () => {
    try {
      const storageUser = await AsyncStorage.getItem("user");
      const storagePassword = await AsyncStorage.getItem("password");
      const storageIpAccess = await AsyncStorage.getItem("ipAccess");

      setFormData((prev) => ({
        ...prev,
        user: storageUser?.toString(),
        password: storagePassword?.toString(),
        ipAccess: storageIpAccess?.toString(),
      }));
      if (
        storageUser !== null &&
        storagePassword !== null &&
        storageIpAccess !== null
      ) {
        Alert.alert("Tus datos se han recuperado");
      }
    } catch (error) {
      Alert.alert("Error al recuperar tus datos de configuracion", error);
    }
  };

  useEffect(
    () => {
      retrieveData();
    },
    []
    //
  );

  // const { user, setUser } = useContext(useAppContext);
  const { user } = useAppContext();
  const { setUser } = useAppContext();

  const [formData, setFormData] = useState({
    user: "",
    password: "",
    ipAccess: "",
    printerFound: "",
  });

  const saveDataInStorage = async () => {
    try {
      await AsyncStorage.setItem("user", formData.user);
      await AsyncStorage.setItem("password", formData.password);
      await AsyncStorage.setItem("ipAccess", formData.ipAccess);
      Alert.alert("Configuracion guardada, puedes regresar y usar la app");
    } catch (error) {
      Alert.alert("error al guardar tus datos de configuracion", error);
    }
  };
  const [secureMode, setSecureMode] = useState(true);

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
          secureTextEntry={secureMode}
          value={formData.user}
          onChange={(e) =>
            setFormData({ ...formData, user: e.nativeEvent.text })
          }
        />
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder="Contraseña del router"
          secureTextEntry={secureMode}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.nativeEvent.text })
          }
        />
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder="www.ip-de-acceso-router.com"
          secureTextEntry={secureMode}
          value={formData.ipAccess}
          onChange={(e) =>
            setFormData({ ...formData, ipAccess: e.nativeEvent.text })
          }
        />
        {/*  */}
        {/* <TextInput
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder="impresora seleccionada"
          onChange={(e) =>
            setFormData({ ...formData, printerFound: e.nativeEvent.text })
          }
        /> */}

        <View className="">
          <Pressable
            className="bg-black  text-white font-bold py-2 px-4 rounded"
            onPress={() => setSecureMode(!secureMode)}
          >
            <Text className="text-white font-bold text-center">
              {!secureMode ? "Ocultar datos Sensibles" : "Datos ocultos"}
            </Text>
            {!secureMode && (
              <AntDesign
                name="eye"
                size={24}
                color="white"
                className="text-center"
              />
            )}
          </Pressable>
          <Pressable
            className="bg-black  text-white font-bold py-2 px-4 rounded"
            onPress={() => saveDataInStorage()}
          >
            <Text className="text-white font-bold text-center">
              {saveDataTxt}
            </Text>
          </Pressable>
        </View>
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
