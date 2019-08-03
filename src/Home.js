import React ,{Component}from "react";
import { SafeAreaView, StyleSheet, View, Text ,TouchableOpacity} from "react-native";
import * as Animatable from "react-native-animatable";


 class Home extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        fontSize:0
     }
   }
   
   render() {
     return (
       <SafeAreaView
         style={{
           flex: 1,
           //  backgroundColor: "#000",
           justifyContent: "center",
           alignItems: "center"
         }}
       >
         <TouchableOpacity onPress={this.props.navigation.openDrawer}>
           <Text style={{ fontWeight: "bold", marginTop: 20 }}>
             Open Drawer
           </Text>
         </TouchableOpacity>
         <Text style={{ fontWeight: "bold", marginTop: 20 }}>Home</Text>
         <Animatable.Text animation="zoomInUp">
           Zoom me up, Scotty
         </Animatable.Text>
         <TouchableOpacity
           onPress={() =>
             this.setState({ fontSize: (this.state.fontSize || 10) + 5 })
           }
         >
           <Animatable.Text
             transition="fontSize"
             style={{ fontSize: this.state.fontSize || 10 }}
           >
             Size me up, Scotty
           </Animatable.Text>
         </TouchableOpacity>
       </SafeAreaView>
     );
   }
 }

const styles = StyleSheet.create({});

export default Home;
