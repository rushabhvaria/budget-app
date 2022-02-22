import React, { Fragment, useState, useEffect } from "react";
import {  Button, VStack, HStack, Switch, useColorMode, Heading, ScrollView, Box, Image, Collapse, Pressable, Text, View, FlatList, Divider, Progress, Center, NativeBaseProvider } from "native-base";
import {SafeAreaView, Dimensions, StyleSheet} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { PieChart, BarChart } from "react-native-svg-charts";
import { Text as SvgText} from "react-native-svg";
const BudgetScreen = () => {
    const rupee = {symbol: '\u20B9'};
    const data1 = [
      {
        key: 1,
        amount: 50,
        svg: { fill: "#6366f1" },
      },
      {
        key: 2,
        amount: 50,
        svg: { fill: "#857eef" },
      },
      {
        key: 3,
        amount: 40,
        svg: { fill: "#a096ec" },
      },
      {
        key: 4,
        amount: 95,
        svg: { fill: "#b8afea" },
      },
      {
        key: 5,
        amount: 35,
        svg: { fill: "#cec8e6" },
      },
    ];

    
    
    const screenWidth = Dimensions.get("window").width;
    const data_bar = [{value:10000, svg:{fill: '#6366f1'}},{value: 6755, svg:{fill: '#b8afea'}}]
    const data2 = [10000,6775];

    const CUT_OFF = 20;
    const BarLabels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => (
        <SvgText
          key={index}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={8}
          fill={value >= CUT_OFF ? "white" : "black"}
          alignmentBaseline={"middle"}
          textAnchor={"middle"}
        >
          {value}
        </SvgText>
      ));

       const Labels = ({ slices, height, width }) => {
         return slices.map((slice, index) => {
           const { labelCentroid, pieCentroid, data } = slice;
           return (
             <SvgText
               key={index}
               x={pieCentroid[0]}
               y={pieCentroid[1]}
               fill={"white"}
               textAnchor={"middle"}
               alignmentBaseline={"middle"}
               fontSize={24}
               stroke={"black"}
               strokeWidth={0.2}
             >
               {data.amount}
             </SvgText>
           );
         });
       };

    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: "#6366f1" }}>
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
                  paddingBottom="2"
                >
                  <VStack>
                    <HStack justifyContent="space-between" marginBottom="7">
                      <VStack flex="1" justifyContent="center">
                        <Text fontSize="3xl" color="white" fontWeight="bold">
                          Si Ae
                        </Text>
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
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    paddingBottom="6"
                    justifyContent={"flex-start"}
                    color="indigo.900"
                  >
                    December Budget
                  </Heading>
                  <Text color="indigo.900" fontWeight="bold" fontSize="md">
                    {rupee.symbol}7,234 <Text opacity="0.5">spent of</Text>{" "}
                    {rupee.symbol}10,000
                  </Text>
                  <Progress
                    colorScheme="indigo"
                    rounded="7"
                    size="2xl"
                    value={45}
                  />
                  <Text color="indigo.900" opacity="0.5">
                    You're <Text fontWeight="bold">{rupee.symbol}2,757</Text>{" "}
                    under budget. Great going!
                  </Text>
                </Box>
              </HStack>

              <HStack justifyContent="center" marginBottom="1" marginTop="5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    paddingBottom="6"
                    justifyContent={"flex-start"}
                    color="indigo.900"
                  >
                    December Spending
                  </Heading>
                  <PieChart
                    style={{ height: 200 }}
                    valueAccessor={({ item }) => item.amount}
                    data={data1}
                    spacing={0}
                    outerRadius={"100%"}
                    innerRadius = {"60%"}

                  >
                    <Labels />
                  </PieChart>
                </Box>
              </HStack>
              <HStack justifyContent="center" marginBottom="1" marginTop="5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    paddingBottom="6"
                    justifyContent={"flex-start"}
                    color="indigo.900"
                  >
                    Monthly Budget Breakdown
                  </Heading>

                  <VStack>
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          Groceries
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}200{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}700
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          Medicines
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}290{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}400
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text fontSize="md" fontWeight="bold" color="red.500">
                          Food & Delivery
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text fontSize="md" fontWeight="bold" color="red.500">
                          {rupee.symbol}900{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}700
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          Electricity
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}789{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}800
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          Telephone & Internet
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}450{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}500
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </HStack>
  <HStack justifyContent="center" marginBottom="1" marginTop="5">
                    <Box bgColor="white" width="85%" rounded="7" padding="3" paddingBottom="8">
                        <Heading fontSize="xl" fontWeight="bold" paddingBottom="3" justifyContent={"flex-start"} color="indigo.900">
                            December Cash Flow
                        </Heading>
                        <VStack>
                            <Text fontSize="2xl" fontWeight="bold" paddingBottom="3">+ {rupee.symbol}3,225</Text>
                        </VStack>
                        <VStack>
                        <HStack display="flex">

                            <Text fontSize="xl" fontWeight="bold"  color="indigo.900" justifyContent={"flex-start"} opacity={0.5}>Earned {"\n"}{rupee.symbol}10,000</Text>

                            <Text fontSize="xl" fontWeight="bold"  color="indigo.900" style={{position: 'absolute', right: 0}} justifyContent={"flex-end"} opacity={0.5}>Spent {"\n"}{rupee.symbol}6,775</Text>

                        </HStack>
                        </VStack>
                        <View
                    style={{
                      flexDirection: "row",
                      height: 200,
                      paddingVertical: 3,
                    }}
                  >
                    <BarChart
                      style={{ flex: 1 }}
                      data={data2}
                      svg={{fill:'#6366f1'}}
                      contentInset={{ top: 10, bottom: 10 }}
                      spacing={0.2}
                      gridMin={0}
                    >
                      
                    </BarChart>
                  </View>
                    </Box>
                    
                
            </HStack>

            </VStack>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
};


export default BudgetScreen;
