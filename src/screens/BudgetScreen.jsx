import React, { Fragment, useState, useEffect } from "react";
import { Text, Button, VStack, HStack, Switch, useColorMode, Heading, ScrollView, Box, Image, Collapse, Pressable, FlatList, Divider, Progress, Center, NativeBaseProvider } from "native-base";
import {SafeAreaView, Dimensions} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { ResponsivePie } from '@nivo/pie'

const BudgetScreen = () => {
    const rupee = {symbol: '\u20B9'};
    const data = [
        {
          "id": "java",
          "label": "java",
          "value": 93,
          "color": "hsl(227, 70%, 50%)"
        },
        {
          "id": "php",
          "label": "php",
          "value": 265,
          "color": "hsl(340, 70%, 50%)"
        },
        {
          "id": "make",
          "label": "make",
          "value": 150,
          "color": "hsl(275, 70%, 50%)"
        },
        {
          "id": "stylus",
          "label": "stylus",
          "value": 7,
          "color": "hsl(346, 70%, 50%)"
        },
        {
          "id": "hack",
          "label": "hack",
          "value": 109,
          "color": "hsl(226, 70%, 50%)"
        }
      ]
    
    const screenWidth = Dimensions.get("window").width;
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
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'purples' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', '0.2' ] ] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', '1' ] ] }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'ruby'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'c'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'go'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
                    </Box>
                    
                
            </HStack>
                


            </VStack>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

export default BudgetScreen;
