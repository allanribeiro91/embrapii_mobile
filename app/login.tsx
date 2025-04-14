import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import theme from '@/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    alert('teste');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.boxLogo}>
            <Image
              source={require('@/assets/images/embrapii_icon_large.png')}
              resizeMode="contain"
              style={styles.boxLogoImage}
            />
            <Text style={styles.boxLogoText}>
              DATA
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Titilium Web',
                  color: theme.colors.verdePii,
                }}
              >
                PII
              </Text>
            </Text>
          </View>

          <View style={styles.boxLogin}>
            <View style={styles.boxLoginItem}>
              <Text style={styles.loginLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                value={'@embrapii.org.br'}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.boxLoginItem}>
              <Text style={styles.loginLabel}>Senha</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#888"
                />
                <Pressable>
                  <MaterialIcons
                    name={showPassword ? 'visibility' : 'visibility-off'}
                    size={24}
                    color={theme.colors.verdePiiClaro}
                  />
                </Pressable>
              </View>
            </View>

            <View style={styles.boxLoginItem}>
              <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  ); // ou "/projetos", se quiser
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
    height: '100%',
    backgroundColor: theme.colors.background,
  },

  boxLogo: {
    alignItems: 'center',
    marginTop: -50,
  },
  boxLogoImage: {
    width: 100,
    height: 100,
  },
  boxLogoText: {
    color: 'white',
    fontFamily: 'Titillium Web',
    fontSize: 24,
    textAlign: 'center',
  },

  boxLogin: {
    width: '80%',
    borderRadius: 10,
  },

  boxLoginItem: {},

  title: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Titillium Web',
    marginBottom: 30,
    textAlign: 'center',
  },
  loginLabel: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Titillium Web',
  },
  input: {
    backgroundColor: '#08201e',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Titillium Web',
  },
  button: {
    backgroundColor: '#082c2a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Titillium Web',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#08201e',
    borderRadius: 8,
    // marginBottom: 20,
    paddingHorizontal: 12,
  },
  toggleText: {
    color: theme.colors.verdePii,
    fontFamily: 'Titillium Web',
    paddingHorizontal: 8,
  },

  boxFooter: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 60,
    // backgroundColor: theme.colors.azulgov
  },
  boxFooterImage: {
    width: 300,
    height: 90,
  },
});
