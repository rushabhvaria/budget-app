import React from "react";

import { extendTheme, themeTools, NativeBaseProvider } from "native-base";
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

const components = {
    Heading: {
      // Can pass also function, giving you access theming tools
      baseStyle: ({ colorMode }) => {
        return {
          color: colorMode === 'dark' ? 'red.300' : 'blue.300',
          fontWeight: 'normal',
        };
      },
    },
  }

// extend the theme
export const theme = extendTheme({ 
    components: components,
    config: config 
});

function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Provider store={store}>
                <MainScreen />
            </Provider>
        </NativeBaseProvider>
    );
}

export default App


// Testing Dark mode
{/* <Button colorScheme="indigo">Home Screen</Button>
            <Heading>Dark Mode</Heading>
            <Switch
                    size="lg"
                    colorScheme="blue"
                    onToggle={toggleColorMode}
                    isChecked={colorMode === "dark"}
                /> */}