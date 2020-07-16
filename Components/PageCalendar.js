import React from "react";
import {
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView
} from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../Components/Styles";
import { AntDesign } from "@expo/vector-icons";
import SlotTime from "../Components/SlotTime";
import moment from "moment";
import "moment/min/locales";
import { List, ListItem } from "react-native-elements";

Separator = () => {
  return <View style={styles.separator} />;
};

class PageCalendar extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerShown: false };
  };
  state = {
    availabilities: [],
    firstDay: "",
    lastDay: "",
    start_on: ""
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://demo.simundia.com/api/v1/profiles/S_C_EU-b7GrjGMd8aLrE/calendar?start=2020-07-05T18:30:00.000Z"
    );
    this.setState({
      availabilities: response.data.availabilities,
      firstDay: response.data.firstDay,
      lastDay: response.data.lastDay,
      start_on: response.data.availabilities[0][1]["start_on"],
      end_on: response.data.availabilities[0][1]["end_on"]
    });
    // console.log(response.data.availabilities[0][1]["start_on"]);
    console.log(this.state.start_on);
    console.log(this.state.end_on);

    // console.log(response.data.availabilities[0][0]["day"]);
  };
  _timeStart = () => {
    const dateStart = new Date(this.state.start_on);
    console.log("dateStart :" + dateStart);
    const timeStart = dateStart.getHours() + ":" + dateStart.getMinutes();
    console.log("timeStart :" + timeStart);
    this.setState({
      start_on: timeStart
    });
  };
  _timeEnd = () => {
    const dateEnd = new Date(this.state.end_on);
    console.log("dateEnd :" + dateEnd);
    const timeEnd = dateEnd.getHours() + ":" + dateEnd.getMinutes();
    console.log("timeEnd :" + timeEnd);
    this.setState({
      end_on: timeEnd
    });
  };

  _loop = () => {
    this.state.availabilities.slice(1, 3);
    console.log(this.state.availabilities.slice(1, 3));
  };

 

  _handleDateBefore = async () => {
    const firstDay = this.state.firstDay;
    // const slot = this.state.start_on;
    await axios
      .get(
        `https://demo.simundia.com/api/v1/profiles/S_C_EU-b7GrjGMd8aLrE/calendar?before=${firstDay}T18:30:00.000Z`
      )
      .then(response => {
        this.setState({
          availabilities: response.data.availabilities,
          firstDay: response.data.firstDay
          // start_on: response.data.availabilities[0][1]["start_on"]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  _handleDateNext = async () => {
    const lastDay = this.state.lastDay;
    await axios
      .get(
        `https://demo.simundia.com/api/v1/profiles/S_C_EU-b7GrjGMd8aLrE/calendar?next=${lastDay}T18:30:00.000Z`
      )
      .then(response => {
        this.setState({
          availabilities: response.data.availabilities,
          lastDay: response.data.lastDay
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text_title}>
            Choisissez le créneau horaire de votre choix pour effectuer votre
            séance avec Romy Hammann notre coach d'orientation Simundia.
          </Text>
          <Text style={styles.time_zone_info}>
            * fuseau horaire : Europe/Paris
          </Text>

          {/* <TouchableOpacity style={styles.slot} onPress={this._timeStart}>
            <Text>press</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.slot}>
            <Text style={{ color: "red", textAlign: "center" }}>
              {this.state.start_on}
            </Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity style={styles.slot} onPress={this._loop}>
            <Text>press</Text>
          </TouchableOpacity>
          <Text>---------------------------------------</Text> */}

         
        </View>

        <ScrollView>
          {/* <Separator /> */}

          <View style={styles.widget_calendar}>
            <View>
              <TouchableOpacity
                style={styles.arrow_left}
                onPress={this._handleDateBefore}
              >
                <View>
                  <AntDesign name="left" size={30} color="#B6BBC8" />
                </View>
              </TouchableOpacity>
            </View>

            {this.state.availabilities.map((item, index) => {
              console.log(item.length);

              return (
                <View style={styles.availabilities}>
                  <View>
                    <View style={styles.date} key={index}>
                      <Text style={styles.text_date_day}>{item[0]["day"]}</Text>
                      <Text style={styles.text_date_month}>
                        {item[0]["month"]}
                      </Text>
                    </View>
                    <ScrollView>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>08:00</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>08:30</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>09:00</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>09:30</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>10:00</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>10:30</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>11:00</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>11:30</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={styles.text_slot}>12:00</Text>
                      </TouchableOpacity>
                    </ScrollView>

                    {/* <View>
                      <TouchableOpacity style={styles.slot}>
                        <Text style={{ color: "pink" }}>
                          {this.state.start_on}
                        </Text>
                      </TouchableOpacity>
                    </View> */}
                  </View>

                  {/* <Text>{this.state[0][1]["start_on"]}</Text> */}
                </View>
              );
            })}

            <View>
              <TouchableOpacity
                style={styles.arrow_right}
                onPress={this._handleDateNext}
              >
                <View style={{ paddingLeft: 15 }}>
                  <AntDesign name="right" size={30} color="#B6BBC8" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
         
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default PageCalendar;
