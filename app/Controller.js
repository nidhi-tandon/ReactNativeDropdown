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
    Dimensions,
    FlatList,
    TouchableHighlight
} from 'react-native'
import AppContainer from './index'

export default class ModalController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: this.props.visibility,
            option:'Oyster'
        }
    }

    componentDidMount(){
        //alert("in the component")
        this.setState({visibility:this.props.visibility}, ()=>{
            //alert("component" +this.state.visibility)
        })
    }

    separator(){
        return(
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#CED0CE"
                }}/>
        )
    }
    _onPress(value){
        this.setState({option:value, visibility:false}, ()=>{
            alert("state change:"+ this.state.option)
        })

    }
    render(){
        //alert("render" +this.props.visibility)
        return(
            this.props.visibility? <View style={{height:80, width:120, backgroundColor:'white',
                marginTop:this.props.y, marginLeft:this.props.x-100, position:'absolute', borderRadius:6,
                elevation:5}}>
                <FlatList
                    data={[{key: 'Pearl'}, {key: 'Ruby'}]}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            onPress={() => this._onPress(item.key)}>
                            <Text>{item.key}</Text>
                        </TouchableHighlight>
                        )}
                    ItemSeparatorComponent={this.separator.bind(this)}
                />
                <AppContainer name={this.state.option} renderedBack={true}/>
            </View>: null
        )
    }
}