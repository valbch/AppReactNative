import React from "react";
import axios from "axios";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  AsyncStorage,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Strong
} from "react-native";
import styles from "../Components/Styles";

class Home extends React.Component {
  state = {
    url_token: "",
    email: "",
    token: ""
  };

  componentDidMount = async () => {
    const urlToken = await AsyncStorage.getItem("urlToken");
    const email = await AsyncStorage.getItem("email");
    const token = await AsyncStorage.getItem("userToken");
    this.setState({ url_token: urlToken, email: email, token: token });
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.form_template}>
          <Text style={styles.title}>Tout commence ici !</Text>
          <View style={styles.wrapper_underline}></View>
          <Image
            style={styles.images}
            source={require("../assets/images/start.jpg")}
          />
          <Text style={styles.text_container}>
            <Text style={styles.text_strong}>
              Plus de 90% des coachés Simundia{" "}
            </Text>
            ont vu un <Text style={styles.text_strong}>impact positif </Text>sur
            leur<Text style={styles.text_strong}> performance</Text>, leur
            <Text style={styles.text_strong}> engagement </Text>et leur{" "}
            <Text style={styles.text_strong}>épanouissement</Text>.
          </Text>
          <View style={styles.container_btn}>
            <TouchableOpacity
              style={styles.btn_primary_inapp}
              onPress={() => this.props.navigation.navigate("Form_answers")}
            >
              <Text style={styles.text_btn_primary_inapp}>
                Démarrer mon accompagnement
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Button title="Se déconnecter" onPress={this.signOutAsync} />
      </SafeAreaView>
    );
  }
}

export default Home;
