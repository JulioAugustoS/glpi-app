import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

// Style 
import gs from './../assets/componentStyle/geralStyle'

const logoImage = require('./../assets/images/logo.png')

class Login extends Component {

    render(){

        return(
            <View style={gs.body}>
                <View style={gs.transparent}>
                    <View style={gs.viewLogo}>
                        <Image source={logoImage} style={gs.logo} />
                    </View>

                </View>

            </View>
        )
    }

}

export default Login