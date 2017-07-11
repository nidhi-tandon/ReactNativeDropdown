/**
 * Created by nidhitandon on 07/07/17.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    StyleSheet
} from 'react-native'

export default class ModalController extends Component {
    constructor(props) {
        super(props)
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
        this.props.func(value)
    }

    render(){
        return(
            this.props.visibility? <View style={[styles.outerContainer,{marginTop:this.props.y, marginLeft:this.props.x-80}]}>
                <FlatList
                    data={[{key: 'Pearl'}, {key: 'Ruby'},{key: 'Oyster'}]}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            onPress={() => this._onPress(item.key)}
                            style={styles.listContainer}>
                            <Text style={styles.textItems}>{item.key}</Text>
                        </TouchableHighlight>
                        )}
                    ItemSeparatorComponent={this.separator.bind(this)}
                />
            </View>: null
        )
    }
}
const styles=StyleSheet.create({
    outerContainer:{
        height:90,
        width:80,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:6,
    },
    listContainer:{
        backgroundColor:'white',
        margin:5
    },
    textItems:{
        fontSize:15,
        color:'rgb(94,94,94)'
    }
})