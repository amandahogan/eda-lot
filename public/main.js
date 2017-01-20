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
        "fontFamily": "'Noto Serif', serif",
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
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "height": 60,
        "backgroundColor": "#f5f5f5",
        "textAlign": "center",
        "paddingTop": 20
    }
});