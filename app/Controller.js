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
    FlatList
} from 'react-native'

 separator(){
    return(
    <View
        style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
        }}/>
    )
}
export default class ModalController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: this.props.visibility
        }
    }
    render(){
        return(
            this.props.visibility? <View style={{height:120, width:120, backgroundColor:'white',
                marginTop:this.props.y, marginLeft:this.props.x-100, position:'absolute', borderRadius:6,
                elevation:5}}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                    ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                        <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                        )}
                />
            </View>: null
        )
    }
}