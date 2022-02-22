import React, { Fragment, useState, useEffect } from "react";
import {  Button, VStack, HStack, Switch, useColorMode, Heading, ScrollView, Box, Image, Collapse, Pressable, Text, View, FlatList, Divider, Progress, Center, NativeBaseProvider } from "native-base";
import {SafeAreaView, Dimensions, StyleSheet} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { PieChart, BarChart } from 'react-native-svg-charts';
const BudgetScreen = () => {
    const rupee = {symbol: '\u20B9'};
    const data = [
        {
            key: 1,
            value: 50,
            svg: { fill: '#6366f1' },
            arc: { outerRadius: '130%', cornerRadius: 10,  }
        },
        {
            key: 2,
            value: 50,
            svg: { fill: '#857eef' }
        },
        {
            key: 3,
            value: 40,
            svg: { fill: '#a096ec' }
        },
        {
            key: 4,
            value: 95,
            svg: { fill: '#b8afea' }
        },
        {
            key: 5,
            value: 35,
            svg: { fill: '#cec8e6' }
        }
    ]

    
    const screenWidth = Dimensions.get("window").width;
    const data_bar = [{value:10000, svg:{fill: '#6366f1'}},{value: 6755, svg:{fill: '#b8afea'}}]

    return (
        <Fragment>
            <SafeAreaView style={{ flex:0, backgroundColor: '#6366f1' }}>
            <ScrollView
                    vertical
                    showsVerticalScrollIndicator={false}
                    bgColor="gray.100"
                    nestedScrollEnabled={true}
                    height="100%"
                >
            <VStack>
            <HStack>
            <Box
                bgColor="indigo.500"
                width="100%"
                paddingX="5"
                paddingTop="2"
                paddingBottom="2">
            <VStack>
                <HStack justifyContent="space-between" marginBottom="7">
                    <VStack flex="1" justifyContent="center">
                        <Text fontSize="3xl" color="white" fontWeight="bold">Si Ae</Text>
                    </VStack>
                    <VStack marginX="2" justifyContent="center">
                        <Feather name="plus" size={30} color={"white"} />
                    </VStack>
                    <VStack marginX="2" justifyContent="center">
                        <Feather name="settings" size={24} color={"white"} />
                    </VStack>
                </HStack>
                </VStack>
                </Box>

                </HStack>
                <HStack justifyContent="center" marginBottom="1" marginTop="-5">
                    <Box bgColor="white" width="85%" rounded="7" padding="3" paddingBottom="8">
                        <Heading fontSize="xl" fontWeight="bold" paddingBottom="6" justifyContent={"flex-start"} color="indigo.900">
                            December Budget
                        </Heading>
                        <Text  color="indigo.900" fontWeight="bold" fontSize="md">{rupee.symbol}7,234 <Text opacity="0.5">spent of</Text> {rupee.symbol}10,000</Text>
                        <Progress colorScheme="indigo" rounded="7" size="2xl" value={45} />
                        <Text color="indigo.900" opacity="0.5">You're <Text fontWeight="bold">{rupee.symbol}2,757</Text> under budget. Great going!</Text>
                    </Box>
                    
                
            </HStack>

            <HStack justifyContent="center" marginBottom="1" marginTop="5">
                    <Box bgColor="white" width="85%" rounded="7" padding="3" paddingBottom="8">
                        <Heading fontSize="xl" fontWeight="bold" paddingBottom="6" justifyContent={"flex-start"} color="indigo.900">
                            December Spending
                        </Heading>
                        <PieChart
                style={{ height: 200 }}
                outerRadius={'70%'}
                innerRadius={10}
                data={data}
            ></PieChart>
                    </Box>
                    
                
            </HStack>
            <HStack justifyContent="center" marginBottom="1" marginTop="5">
                    <Box bgColor="white" width="85%" rounded="7" padding="3" paddingBottom="8">
                        <Heading fontSize="xl" fontWeight="bold" paddingBottom="6" justifyContent={"flex-start"} color="indigo.900">
                            Monthly Budget Breakdown
                        </Heading>

                        <VStack>
                        <HStack justifyContent="space-between" paddingBottom="2">
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">Groceries</Text></VStack>
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}200 <Text color="indigo.900" opacity={0.5}>of {rupee.symbol}700</Text></Text></VStack>
                        </HStack>
                        <Divider marginY={3} />
                        <HStack justifyContent="space-between" paddingBottom="2">
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">Medicines</Text></VStack>
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}290 <Text color="indigo.900" opacity={0.5}>of {rupee.symbol}400</Text></Text></VStack>
                        </HStack>
                        <Divider marginY={3} />
                        <HStack justifyContent="space-between" paddingBottom="2">
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="red.500">Food & Delivery</Text></VStack>
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="red.500">{rupee.symbol}900 <Text color="indigo.900" opacity={0.5}>of {rupee.symbol}700</Text></Text></VStack>
                        </HStack>
                        <Divider marginY={3} />
                        <HStack justifyContent="space-between" paddingBottom="2">
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">Electricity</Text></VStack>
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}789 <Text color="indigo.900" opacity={0.5}>of {rupee.symbol}800</Text></Text></VStack>
                        </HStack>
                        <Divider marginY={3} />
                        <HStack justifyContent="space-between" paddingBottom="2">
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">Telephone & Internet</Text></VStack>
                                            <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}450 <Text color="indigo.900" opacity={0.5}>of {rupee.symbol}500</Text></Text></VStack>
                        </HStack>
                        </VStack>
                    </Box>
                    
                
            </HStack>
            <HStack justifyContent="center" marginBottom="1" marginTop="5">
                    <Box bgColor="white" width="85%" rounded="7" padding="3" paddingBottom="8">
                        <Heading fontSize="xl" fontWeight="bold" paddingBottom="6" justifyContent={"flex-start"} color="indigo.900">
                            December Cash Flow
                        </Heading>
                        <BarChart
                style={{ height: 200 }}
                data={data_bar}
                gridMin={0}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 20, bottom: 20 }}
            ></BarChart>
                    </Box>
                    
                
            </HStack>


            </VStack>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};


export default BudgetScreen;
