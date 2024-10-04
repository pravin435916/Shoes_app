import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log("After dom built")
    }

    componentWillMount(){
        console.log("Before dom built")
    }

    componentWillUnmount(){
        
    }


    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}

export default Home