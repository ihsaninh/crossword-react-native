import AuthLoading from './AuthLoading';
import Login from "./Login/"
import Register from "./Register/"
import Home from "./Home/"
import PlayGround from "./PlayGround/"

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

const AppStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { gesturesEnabled: true }
        },
        PlayGround: {
            screen: PlayGround,
            navigationOptions: { gesturesEnabled: true }
        }
    },
    {
        defaultNavigationOptions: {
            initialRouteName: PlayGround,
            resetOnBlur: true,
        }
    }
);

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { gesturesEnabled: true, header: null }
        },
        Register: {
            screen: Register,
            navigationOptions: { gesturesEnabled: true, header: null }
        }
    },
    {
        defaultNavigationOptions: {
            initialRouteName: Login,
            resetOnBlur: true,
        }
    }
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'AuthLoading',
        resetOnBlur: true,
    }
));

export default createAppContainer(AppContainer);