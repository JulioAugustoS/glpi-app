import React, { Component } from 'react'
import { View, AsyncStorage, Text } from 'react-native'



class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            token: ''
        }
    }

    async componentWillMount(){
        this.setState({token: await AsyncStorage.getItem('@token')})
    }

    render(){
        return(
            <View>
                <Text>{this.state.token}</Text>
            </View>
        )

    }

}

export default Home