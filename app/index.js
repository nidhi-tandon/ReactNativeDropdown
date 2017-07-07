/**
 * Created by nidhitandon on 07/07/17.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get('window').height
import Controller from './Controller'
export default class App extends Component{
    constructor(){
        super()
        this.state={
            visibility: false,
            x:0,
            y:0
        }
    }
    _toggleModal(x,y){
        this.setState({visibility:!this.state.visibility, x:x,y:y})


    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>The World is your oyster!!</Text>
                    <TouchableOpacity style={styles.iconContainer}
                            onPress={(value)=>{this._toggleModal(value.nativeEvent.pageX, value.nativeEvent.pageY)}}>
                        <Icon name="dots-vertical" size={30} style={styles.icons}/>
                    </TouchableOpacity>
                </View>
                <Controller visibility={this.state.visibility}
                x={this.state.x}
                y={this.state.y}/>
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
        backgroundColor:'rgb(113,207,233)',
        margin:30,
        //borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'rgb(71,84,93)',
        borderWidth:0.5,
        flexDirection:'row'
    },
    heading: {
        color:'black',
        fontSize: 10,
        //marginTop:40,
        //marginLeft:30
    },
    iconContainer:{
        width:30,
        height:60,
        //backgroundColor:'black',
        marginLeft:60
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
    modalTextContainer:{

    }
})