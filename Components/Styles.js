import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    //fontFamily: "Montserrat",
    fontSize: 56,
    marginTop: 60,
    marginBottom: 20,
    flex: 1
    // backgroundColor: "blue"
  },
  form_group: {
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15
    // backgroundColor: "yellow"
  },
  submit_button_banner: {
    fontSize: 16,

    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "center"
  },
  form_answer_context_text: {
    height: 400,

    borderColor: "rgba(211,214,222,0.4)",
    borderWidth: 1

    // backgroundColor: "red"
  },
  container_btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "black"
  },

  text_btn_primary_bis: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },

  btn_primary_bis: {
    backgroundColor: "#1751de",
    height: 40,
    borderRadius: 2,
    alignSelf: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24
  },
  text_btn_primary_inapp: {
    color: "white",
    fontSize: 14,
    textAlign: "center"
  },

  btn_primary_inapp: {
    backgroundColor: "#41B491",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    borderRadius: 5,
    borderColor: "#41B491",
    borderWidth: 2
  },
  btn_secondary_inapp: {
    backgroundColor: "white",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderColor: "#41B491",
    borderWidth: 2,

    borderRadius: 5
  },
  text_btn_secondary_inapp: {
    color: "#41B491",
    fontSize: 14,
    textAlign: "center"
  },

  form_template: {
    // backgroundColor: "red",
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 50,
    marginBottom: 50
  },
  form_template_header: {
    borderRadius: 3,
    padding: 10
    // backgroundColor: "yellow",
  },
  title: {
    textTransform: "uppercase",

    color: "#091E53",
    fontSize: 24,
    marginBottom: 12,

    textAlign: "center",
    fontWeight: "bold"
    // backgroundColor: "green",
  },
  wrapper_underline: {
    borderBottomWidth: 3,
    borderBottomColor: "#1751DE",
    width: 80,
    alignSelf: "center"
  },
  control_label: {
    maxWidth: "100%",
    marginBottom: 5,
    color: "#4D5466",
    fontSize: 16
    // backgroundColor: "violet"
  },
  control_label_save: {
    maxWidth: "100%",
    marginBottom: 5,
    color: "#4D5466",
    fontSize: 16,
    marginBottom: 25
    // backgroundColor: "green"
  },
  form_control: {
    height: 38,
    width: "100%",
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 16,
    color: "#4D5466",
    marginTop: 10,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 15
    // backgroundColor: "pink"
  },
  form_inputs: {
    marginTop: 25,
    marginBottom: 25
    // backgroundColor: "black"
  },
  separator_form: {
    marginTop: 50,
    width: 200,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D8DFE6"
  },
  links: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 25,
    marginBottom: 15
  },
  link: {
    paddingBottom: 10,
    textAlign: "center",
    color: "#4D5466",
    fontSize: 16
  },
  text_strong: {
    color: "#41B491"
  },
  text_title_step: {
    marginBottom: 15,
    textAlign: "center",
    color: "#081E53",
    fontWeight: "bold",
    fontSize: 20
    // backgroundColor: "green"
  },
  text_step: {
    marginBottom: 8,
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 15,

    textAlign: "center",
    color: "#4D5466"
  },
  list_category: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#4D5466",
    fontSize: 11,
    width: "100%",
    borderColor: "#B6BBC8",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 7,
    textAlign: "center"
  },
  images: {
    width: "100%",
    height: 200,
    marginTop: 40,
    marginBottom: 40
  },
  text_container: {
    color: "#4D5466",

    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    fontSize: 14
  },
  text_title: {
    marginTop: 20,
    textAlign: "center",
    color: "#4D5466",
    fontSize: 16

    // backgroundColor: "aqua"
  },
  time_zone_info: {
    fontSize: 11,
    color: "#4D5466",
    textAlign: "center"
    // backgroundColor: "chartreuse"
  },
  availabilities: {
    marginTop: 30,
    marginBottom: 30
    // backgroundColor: "coral"
    // =container  date+ slot
  },

  slot: {
    backgroundColor: "#41B491",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    borderRadius: 5
    // backgroundColor: "red"
  },
  text_date_day: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#727786"
  },
  text_date_month: {
    textAlign: "center",

    fontSize: 10,
    color: "#727786"
  },
  date: {
    paddingBottom: 10
    // borderBottom: 1,
  },
  text_slot: {
    color: "white",
    textAlign: "center"
  },
  widget_calendar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
    // backgroundColor: "yellow"
    // =container arrow + date+ slot
  },
  arrow_left: {
    height: 40,
    width: 50,
    marginLeft: 10,
    marginTop: 30

    // block bouton gauche
  },
  arrow_right: {
    height: 40,
    width: 50,
    marginRight: 10,
    marginTop: 30

    // backgroundColor: "white"
    // block bouton droite
  },
  arrow_header: {
    height: 40,
    width: 50,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "red"
  }
});
