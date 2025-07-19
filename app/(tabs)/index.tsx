import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.mainHub}>
      <Text style={styles.text}></Text>
    </View>
  );
}


const styles = StyleSheet.create({
    mainHub: {
      flex: 1,
      backgroundColor: "#A1DAE1",
      alignItems: 'center',
    },
    text: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 20,
    },
})