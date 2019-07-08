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
            navigationOptions: { gesturesEnabled: false}
        }
    },
     {
        Register: {
            screen: Register,
            navigationOptions: { gesturesEnabled: false}
        }
    },
    {
        defaultNavigationOptions: {
            resetOnBlur: true,
            header: null
        }
    }
)

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