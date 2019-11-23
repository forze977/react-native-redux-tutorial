import React from 'react';
import { View, TextInput} from 'react-native';
import { connect } from 'react-redux';

class SecondScreen extends React.PureComponent {
    render(){
        return(
            <View style={{padding: 16}}>
                <TextInput
                style={{borderColor: 'black', borderWidth: 1}}
                onChangeText={(text) => {
                    this.props.upDateText(text);
                }}
                value={this.props.text}/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        text: state.global
    }
}

const mapDispatchToProps = dispatch => {
    return {
        upDateText: (text) => {
            dispatch({type: 'EDIT_GLOBAL', payload: text})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);