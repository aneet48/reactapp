import React, { useRef, useState, useEffect } from "react";
import Icon from "react-native-vector-icons/dist/Feather";
import * as Animatable from "react-native-animatable";

const TabIcon = ({ name, color, size, focused }) => {
  const iconRef = useRef();
//   useEffect(() => {
//     // Update the document title using the browser API
//     console.log(iconRef);
    
//   });
  _onPress = () => {
    iconRef.current && iconRef.current.tada();
  };

  return (
    <Animatable.View ref={iconRef}>
      {focused && _onPress()}
      <Icon name={name} size={size} color={color} />
    </Animatable.View>
  );
};

export default TabIcon;
