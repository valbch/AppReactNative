import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import styles from "../Components/Styles";

class Category extends React.Component {
  _onPress = () => {
    this.props.onCategorySelection(this.props.id);
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          underlayColor="#1751DE"
          activeOpacity={0.5}
          onPress={this._onPress}
        >
          <Text style={styles.list_category}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Category;
