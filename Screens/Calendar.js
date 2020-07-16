import React from "React";
import {
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View
} from "react-native";
import styles from "../Components/Styles";

class Calendar extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerShown: false };
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.form_template}>
          <Text style={styles.title}>Merci !</Text>
          <Image
            style={styles.images}
            source={require("../assets/images/match_coach.png")}
          />
          <Text style={styles.text_container}>
            Afin de vous{" "}
            <Text style={styles.text_strong}> mettre en relation</Text> avec le{" "}
            <Text style={styles.text_strong}>meilleur expert</Text>, nous vous
            proposons un <Text style={styles.text_strong}>premier appel </Text>
            en <Text style={styles.text_strong}>visioconférence</Text> (~ 30
            minutes) avec notre{" "}
            <Text style={styles.text_strong}>coach d'orientation</Text>.
          </Text>
          <View style={styles.container_btn}>
            <TouchableOpacity
              style={styles.btn_primary_inapp}
              onPress={() => {
                this.props.navigation.navigate("PageCalendar");
              }}
            >
              <Text style={styles.text_btn_primary_inapp}>
                Choisir un créneau
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Calendar;
