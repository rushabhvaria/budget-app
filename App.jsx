import React from "react";

import { extendTheme, NativeBaseProvider } from "native-base";
import MainScreen from "./src/screens/MainScreen";
import store from "./src/redux/store";
import { Provider } from "react-redux";
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './src/aws-exports';
// Amplify.configure(awsconfig);

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
};

// extend the theme
export const theme = extendTheme({ config });

function App() {
    return (
        <NativeBaseProvider>
            <Provider store={store}>
                <MainScreen />
            </Provider>
        </NativeBaseProvider>
    );
}

export default App
