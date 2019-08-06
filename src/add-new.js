import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
let { width } = Dimensions.get("window");

export default class AddNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: null,
      selectedText: ""
    };
  }

  static navigationOptions = {
    title: "Add New",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      flex: 1
    }
  };

  imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({ selectedImage: image.path });
      console.log(image);
    });
  };

  render() {
    const { selectedImage, selectedText } = this.state;
    return (
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: "#74dced",
            borderRadius: 5,
            marginVertical: 10
          }}
        >
          <TextInput
            multiline={true}
            placeholder="Add Text"
            onChangeText={text => this.setState({ selectedText: text })}
            value={this.state.selectedText}
            // style={{
            //   MarginHorizontal: 10
            // }}
          />
        </View>
        <View
          style={{
            width: "40%",
            borderWidth: 2,
            borderColor: "#74dced",
            borderRadius: 5,
            marginVertical: 10,
            alignSelf: "center"
          }}
        >
          <View
            style={{
              backgroundColor: "#74dced",
              borderRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 5
            }}
          >
            <TouchableOpacity onPress={this.imagePicker}>
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#fff"
                }}
              >
                Add Image
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {selectedImage && (
          <View
            style={{
              marginVertical: 10
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 10
                // color: "#74dced"
              }}
            >
              Preview:
            </Text>

            <ImageBackground
              style={{
                height: width - 80,
                width: width - 80,
                alignSelf: "center",
                backgroundColor: "red"
              }}
              source={{
                uri: selectedImage
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(000, 000, 000, 0.3)"
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    textAlign: "center",
                    fontWeight: "bold"
                  }}
                >
                  {selectedText}
                </Text>
              </View>
            </ImageBackground>
          </View>
        )}
        {selectedImage && 
        <View
          style={{
            backgroundColor: "#74dced",
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 5
          }}
        >
          <TouchableOpacity >
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#fff"
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        }
      </View>
    );
  }
}
