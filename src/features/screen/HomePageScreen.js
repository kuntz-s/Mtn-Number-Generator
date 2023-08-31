import { View, Text,StyleSheet } from "react-native";

export const HomePageScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Ok ça a marché apparement</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"
   }
})