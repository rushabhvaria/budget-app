import React, { useEffect, useRef, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import BudgetScreen from "./BudgetScreen";
import InvestmentsScreen from "./InvestmentsScreen";
import MarketplaceScreen from "./MarketplaceScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" size={size} color={color} />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Budget"
                    component={BudgetScreen}
                    options={{
                        tabBarLabel: "Budget",
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="pie-chart" size={size} color={color} />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Investments"
                    component={InvestmentsScreen}
                    options={{
                        tabBarLabel: "Investments",
                        tabBarIcon: ({ color, size }) => (
                            <Feather
                                name="briefcase"
                                size={size}
                                color={color}
                            />
                        ),
                        headerShown: true,
                    }}
                />
                <Tab.Screen
                    name="Marketplace"
                    component={MarketplaceScreen}
                    options={{
                        tabBarLabel: "Marketplace",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="construct-outline"
                                size={size}
                                color={color}
                            />
                        ),
                        headerShown: true,
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="user" size={size} color={color} />
                        ),
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainScreen;