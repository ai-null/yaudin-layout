import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'native-base';

// import components
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

export default class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name="camera" style={{paddingLeft: 10}} />,
        headerTitle: 'Yaudin',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center"
        },
        headerRight: <Icon name="paper-plane" style={{paddingRight: 10}} />
    }

    render() {
        return (
            <AppTabNavigator />
        )
    }
}

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})