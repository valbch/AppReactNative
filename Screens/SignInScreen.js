/////////CSS
// Scroll view et safe area
// mettre l'heure du tel et les icones en noir
// OK => header = mettre le logo simundia + icone burger + ombre header shadow react nativ
// typo /color text
// mettre en bleue la selection du textInput
// Separator
// bouton connexion en bleu en touchable opacity
// Coche se souvenir de moi

// static navigationOptions = ({ navigation }) => {headerShown: false} === rien afficher dans le header

import React from "react";
import axios from "axios";
import {
  Button,
  AsyncStorage,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Components/Styles";

class SignInScreen extends React.Component {
  state = {
    email: "anne@google.com",
    password: "azertyui"
  };

  signInAsync = async () => {
    const response = await axios.post(
      "https://demo.simundia.com/api/v1/sessions",
      {
        email: this.state.email,
        password: this.state.password
      }
    );

    if (response.data.authentication_token) {
      const items = [
        ["userToken", response.data.authentication_token],
        ["urlToken", response.data.url_token],
        ["email", this.state.email]
      ];
      AsyncStorage.multiSet(items, () => {
        this.props.navigation.navigate("App");
      });
    } else {
      alert("Invalid email/password");
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.form_template}>
          <View style={styles.form_template_header}>
            <Text style={styles.title}>Connexion</Text>
            <View style={styles.wrapper_underline}></View>
          </View>
          <View style={styles.form_inputs}>
            <Text style={styles.control_label}>Email professionnel</Text>
            <TextInput
              style={styles.form_control}
              placeholder="prenom.nom@entreprise.com"
              autoCapitalize="none"
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
            />

            <Text style={styles.control_label}>Mot de passe</Text>
            <TextInput
              style={styles.form_control}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />

            <Text style={styles.control_label_save}>Se souvenir de moi ?</Text>
          </View>
          <View style={styles.container_btn}>
            <TouchableOpacity
              style={styles.btn_primary_bis}
              onPress={this.signInAsync}
            >
              <Text style={styles.text_btn_primary_bis}>Connexion</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator_form}></View>

          <View style={styles.links}>
            <Text style={styles.link}>Inscription</Text>
            <Text style={styles.link}>Mot de passe oublié ?</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
