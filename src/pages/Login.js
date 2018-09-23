import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Base64 } from 'js-base64';
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

// Style 
import gs from './../assets/componentStyle/geralStyle'
import is from './../assets/componentStyle/inputStyle'
import bs from './../assets/componentStyle/buttonStyle'

const logoImage = require('./../assets/images/logo.png')

class Login extends Component {
    
    state = {
        username: '',
        pass: ''
    }

    logar(){
        const {
            username, 
            pass
        } = this.state

        if(username == ''){
            Alert.alert(
                'Aviso',
                'Informe seu usuário!'
            )
        }else if(pass == ''){
            Alert.alert(
                'Aviso',
                'Informe sua senha!'
            )
        }else{
            axios.get('http://julioaugusto.me/Projetos/glpi/apirest.php/initSession/', {
                headers:{
                    Authorization: 'Basic ' + Base64.encode(username + ':' + pass)
                }
            })
            .then(res => {
                Actions.Home({})
            })
            .catch(err => {
                Alert.alert(
                    'Aviso',
                    'Usuário ou senha incorretos!'
                )
            })
        }   
    }

    render(){

        return(
            <View style={gs.body}>
                <LinearGradient colors={['#34495e', '#2980b9', '#2c3e50']} style={{height: '100%'}}>
                    <View style={gs.transparent}>
                        <View style={gs.viewLogo}>
                            <Image source={logoImage} style={gs.logo} />
                        </View>
                    </View>

                    <View style={[gs.formStyle, {marginBottom: 30}]}>
                        <View style={is.inputContainer}>
                            <TextInput style={[is.input]} value={this.state.username} placeholder="Usuario" onChangeText={username => this.setState({username})} placeholderTextColor="#FFF" />
                        </View>
                        <View style={is.inputContainer}>
                            <TextInput style={[is.input]} value={this.state.pass} placeholder="Senha" onChangeText={pass => this.setState({pass})} secureTextEntry placeholderTextColor="#FFF" />
                        </View>

                        <View style={{marginTop: 30}}>
                            <TouchableOpacity style={[bs.btn, bs.btnLogin, gs.itemCenter]} onPress={() => this.logar()}>
                                <Text style={[bs.btnText, gs.bold, gs.textBranco]}>Entrar</Text>
                            </TouchableOpacity>
                            <Text style={[gs.textBranco, gs.textCenter, {fontSize: 18, marginTop: 20}]} onPress={() => reculperarSenha()}>Esqueceu sua senha?</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }

}

export default Login