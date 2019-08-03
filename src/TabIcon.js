import React, { useRef, useState, useEffect } from "react";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import * as Animatable from "react-native-animatable";

const TabIcon = ({ name, color, size, focused }) => {
  const iconRef = useRef();
  //   useEffect(() => {
  //     // Update the document title using the browser API
  //     console.log(iconRef);

  //   });
  _onPress = () => {
    if (name == "heart") {
      iconRef.current && iconRef.current.pulse();
    } else if (name == "home") {
      iconRef.current && iconRef.current.bounce();
    } else {
      iconRef.current && iconRef.current.rotate();
    }
  };

  return (
    <Animatable.View ref={iconRef}>
      {focused && _onPress()}
      <Icon name={name} size={size} color={color} />
    </Animatable.View>
  );
};

export default TabIcon;
