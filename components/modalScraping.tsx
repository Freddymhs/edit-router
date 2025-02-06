import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Button,
  Pressable,
  Text,
  Alert,
} from "react-native";
import { WebView } from "react-native-webview";

const ModalScraping = () => {
  const webViewRef = useRef(null);
  const generateQr = "Generar contraseña nueva en formato QR";
  const [modalVisible, setModalVisible] = useState(false);

  const handleWebViewLoad = (event) => {
    console.log(`event ->`, event);
    const script = `
        setTimeout(() => {
          const input = document.getElementById('UserName');
          if (input) {
            input.value = 'tu_usuario';
            console.log('Valor asignado correctamente');
          } else {
            console.log('Elemento UserName no encontrado');
          }
        }, 2000);
      `;

    webViewRef.current?.injectJavaScript(script);
  };

  const retrieveData = async () => {
    try {
      const storageUser = await AsyncStorage.getItem("user");
      const storagePassword = await AsyncStorage.getItem("password");
      const storageIpAccess = await AsyncStorage.getItem("ipAccess");
      console.log("Datos recuperados:", {
        storageUser,
        storagePassword,
        storageIpAccess,
      });
    } catch (error) {
      Alert.alert("Error", "Error al recuperar tus datos de configuración.");
      console.error(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>{generateQr}</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <WebView
              ref={webViewRef}
              source={{ uri: "http://192.168.0.1/" }}
              onLoad={handleWebViewLoad}
              javaScriptEnabled={true}
              style={{ flex: 1 }}
            />
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "80%",
    elevation: 5,
  },
});

export default ModalScraping;
