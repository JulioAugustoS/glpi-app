import React, { Component } from 'react'
import { View } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Login from './pages/Login'

class App extends Component {

    render(){
        return(
            <View style={{height: '100%'}}>
                <Router>
                    <Stack key="root">
                        <Scene key="Login" component={Login} hideNavBar hideTabBar />
                    </Stack>
                </Router>
            </View>
        )
    }

}

export default App