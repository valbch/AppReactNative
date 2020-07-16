import React from "react";
import Category from "../Components/Category";
// position absolute

// static navigationOptions = ({ navigation }) => {headerShown: false} === rien afficher dans le header

import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-navigation";
import styles from "../Components/Styles";

class Form_answers extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerShown: false };
  };
  state = {
    categories: [],
    form_answer_id: "",
    selectedCategory: null,
    step: 1,
    context: "",
    expectation: ""
  };
  componentDidMount = async () => {
    const token = await AsyncStorage.getItem("userToken");
    axios
      // creation du formulaire
      .post("https://demo.simundia.com/api/v1/form_answers", {
        token: token
      })
      .then(response => {
        const id = response.data.id;
        this.setState({ form_answer_id: id });
        // Données api venant du serveur :
        return axios.get(
          `https://demo.simundia.com/api/v1/form_answers/${id}/edit?token=V5xnyWn1Jg9axQyqhq2E`
        );
      })
      .then(response => {
        console.log(response);
        this.setState({
          categories: response.data.form_answer.scope_categories
        });
      });
  };

  _onCategorySelection = id => {
    this.setState({ selectedCategory: id });
    console.log("id : " + id);
  };

  // envoyer le choix de l'utilisateur à la BDD au onPress

  _onPressValidate = async () => {
    const urlChoiceUser = `https://demo.simundia.com/api/v1/form_answers/${this.state.form_answer_id}${this.state.context}${this.state.expectation}`;

    await axios
      .patch(urlChoiceUser, this.state)
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      step: this.state.step + 1
    });
  };
  _onPressBack = () => {
    this.setState({
      step: this.state.step - 1
    });
    // _onPressBackHome = () => {
    //   this.props.navigation.navigate("App");
    // };
  };

  _navigateToCalendar = () => {
    this.props.navigation.navigate("Calendar");
  };
  _functionCombined() {
    this._onPressValidate();
    this._navigateToCalendar();
  }

  render() {
    if (this.state.step === 1) {
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text_title_step}>Étape 1 / 3</Text>
          <Text style={styles.text_step}>
            Sur quelle thématique souhaitez-vous être accompagné(e) ?
          </Text>
          <ScrollView style={styles.form_group}>
            <FlatList
              data={this.state.categories}
              keyExtractor={item => item.title}
              renderItem={({ item }) => (
                <Category
                  //Pour trouver les props du component Category, faire un  console.log(this.props); dans le render du component Category.js
                  // recuperer les props avec this.props.title dans le component Catégory.js

                  title={item.title}
                  id={item.id}
                  onCategorySelection={this._onCategorySelection}
                />
              )}
            />
          </ScrollView>
          <View style={styles.submit_button_banner}>
            {/* <View style={styles.container_btn}>
              <TouchableOpacity
                style={styles.btn_secondary_inapp}
                onPress={this._onPressBackHome}
              >
                <Text style={styles.text_btn_secondary_inapp}>Retour</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.container_btn}>
              <TouchableOpacity
                style={styles.btn_primary_inapp}
                onPress={this._onPressValidate}
              >
                <Text style={styles.text_btn_primary_inapp}>Suivant</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
    } else if (this.state.step === 2) {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.text_title_step}>Étape 2/3</Text>
          <Text style={styles.text_step}>
            Dans quel contexte s’inscrit votre demande ? (optionnel)
          </Text>

          <ScrollView style={styles.form_group}>
            <TextInput
              style={styles.form_answer_context_text}
              placeholder="Écrire ici ..."
              multiline={true}
              onChangeText={context => this.setState({ context })}
              value={this.state.context}
            />
          </ScrollView>
          <View style={styles.submit_button_banner}>
            <View style={styles.container_btn}>
              <TouchableOpacity
                style={styles.btn_secondary_inapp}
                onPress={this._onPressBack}
              >
                <Text style={styles.text_btn_secondary_inapp}>Retour</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container_btn}>
              <TouchableOpacity
                style={styles.btn_primary_inapp}
                onPress={this._onPressValidate}
              >
                <Text style={styles.text_btn_primary_inapp}>Suivant</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    } else {
      this.state.step === 3;
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.text_title_step}>Étape 3/3</Text>
          <Text style={styles.text_step}>
            Quelles conséquences positives attendez-vous concrètement suite à
            votre accompagnement ? (optionnel)
          </Text>
          <ScrollView style={styles.form_group}>
            <TextInput
              style={styles.form_answer_context_text}
              placeholder="Écrire ici ..."
              multiline={true}
              onChangeText={expectation => this.setState({ expectation })}
              value={this.state.expectation}
            />
          </ScrollView>
          <View style={styles.submit_button_banner}>
            <View style={styles.container_btn}>
              <TouchableOpacity
                style={styles.btn_secondary_inapp}
                onPress={this._onPressBack}
              >
                <Text style={styles.text_btn_secondary_inapp}>Retour</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container_btn}>
              <TouchableOpacity
                style={styles.btn_primary_inapp}
                onPress={() => this._functionCombined()}
              >
                <Text style={styles.text_btn_primary_inapp}>Suivant</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
  }
}

export default Form_answers;
