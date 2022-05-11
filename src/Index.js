import React from "react";
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import BoneView from './components/BoneView'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Index({ bones }) {
    return (
        <ScrollView style={ style.container }>
            <BoneView style={style.bone} {...bones}/>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#E6E6FA',
        flexDirection: 'column'
    },
    bone: {
        backgroundColor : '#836FFF'
    }
});