import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.PureComponent {
    render() {
        return (
            <View>
                <Text>{this.props.global}</Text>
                <Button 
                title={'to second screen'}
                onPress={() => this.props.navigation.navigate('Second')}/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        global: state.global
    }
}

export default connect(mapStateToProps)(HomeScreen);