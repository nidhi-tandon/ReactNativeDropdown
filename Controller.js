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


export default class ModalController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: this.props.visibility,
            option:''
        }
    }

    componentDidMount(){
        alert("in the component")
        this.setState({visibility:this.props.visibility}, ()=>{
            alert("component" +this.state.visibility)
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
        this.setState({option:value, visibility:false})
    }
    render(){
        alert("render" +this.props.visibility)
        return(
            this.state.visibility? <View style={{height:120, width:120, backgroundColor:'white',
                marginTop:this.props.y, marginLeft:this.props.x-100, position:'absolute', borderRadius:6,
                elevation:5}}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            onPress={() => this._onPress(item)}>
                            <Text>{item.key}</Text>
                        </TouchableHighlight>
                        )}
                    ItemSeparatorComponent={this.separator.bind(this)}
                />
            </View>: null
        )
    }
}