/**
 * Created by nidhitandon on 07/07/17.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Controller from './Controller'

const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get('window').height

export default class App extends Component{
    constructor(){
        super()
        this.state={
            visibility: false,
            x:0,
            y:0,
            value:'Oyster'
        }
    }
    _toggleModal(x,y){
        this.setState({visibility:!this.state.visibility, x:x,y:y})
    }

    handleCalling(value){
        this.setState({value:value, visibility:false})
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>{this.state.value}</Text>
                    <TouchableOpacity style={styles.iconContainer}
                            onPress={(value)=>{this._toggleModal(value.nativeEvent.pageX, value.nativeEvent.pageY)}}>
                        <Icon name="dots-vertical" size={30} style={styles.icons} color='white'/>
                    </TouchableOpacity>
                </View>
                    <Controller visibility={this.state.visibility}
                                x={this.state.x}
                                y={this.state.y}
                    func={this.handleCalling.bind(this)}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(236,242,245)',
    },
    innerContainer:{
        height:screenHeight/12,
        width:screenWidth/1.2,
        backgroundColor:'rgb(255,90,95)',
        margin:30,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'rgb(76,76,76)',
        borderWidth:0.5,
        flexDirection:'row'
    },
    heading: {
        color:'white',
        fontSize: 20,
        fontWeight:"bold"
    },
    iconContainer:{
        width:30,
        height:60,
        marginLeft:100
    },
    icons:{
        marginTop:15
    },
    modalContainer:{
        height:120,
        width:120,
        margin:120,
        backgroundColor:'black'
    },
})