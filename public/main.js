import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "nav flex-column": {
        "borderStyle": "solid",
        "borderColor": "blue"
    },
    "header": {
        "fontFamily": "'Arial Black', 'Arial Bold', Gadget, sans-serif",
        "color": "#ef1509",
        "borderStyle": "solid",
        "borderColor": "red"
    },
    "categories": {
        "borderStyle": "solid",
        "borderColor": "grey"
    },
    "content": {
        "borderStyle": "solid",
        "borderColor": "red"
    },
    "footer": {
        "borderStyle": "solid",
        "borderColor": "grey"
    }
});