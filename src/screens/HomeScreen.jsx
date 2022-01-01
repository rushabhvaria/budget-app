import React, { Fragment, useState, useEffect } from "react";
import { Text, Button, VStack, HStack, Switch, useColorMode, Heading, ScrollView, Box, Image, Collapse, Pressable, FlatList, Divider } from "native-base";
import {SafeAreaView} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";


const HomeScreen = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const [userData, setUserData] = useState(
        {
            id: 1,
            totalNetworth: "2,16,171",
            lastUpdated: "4 mins ago",
            banks_total: "1,33,021",
            creditCards_total: "-9,340",
            loans_total: "-31,000",
            investments_total: "1,23,490",
            property_total: "0",
            banks: [
                {
                    id: 1,
                    accountName: "HDFC Savings Acc",
                    bankName: "HDFC Bank (...3902)",
                    balance: "83,102",
                    lastUpdated: "40 mins ago",
                    logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                },
                {
                    id: 2,
                    accountName: "Axis Priority Acc",
                    bankName: "Axis Bank (...8027)",
                    balance: "53,885",
                    lastUpdated: "30 mins ago",
                    logoURL: "https://www.nfcw.com/wp-content/uploads/2020/06/axis-bank-logo.jpg"
                }
            ]
            // creditCards
            // loans
            // investments
            // property
        }
    );

    const rupee = {symbol: '\u20B9'};

    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    

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
                paddingBottom="7">
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

                <HStack>
                    <Text fontSize="md" color="white">Total Networth</Text>
                </HStack>

                <HStack>
                    <VStack justifyContent="center">
                        <Text fontSize="4xl" color="white">{'\u20B9'} {userData.totalNetworth}</Text>
                    </VStack>
                    <VStack justifyContent="center" marginX="3">
                        <FontAwesome5 name="long-arrow-alt-right" size={24} color={"#38bdf8"} />
                    </VStack>
                </HStack>

                <HStack>
                    <Text fontSize="2xs" color="white" opacity="0.5">Updated {userData.lastUpdated}</Text>
                </HStack>

                <HStack justifyContent="center">
                    <Image
                        source={{
                            uri: "https://i.imgur.com/Y0ZLQXu.png",
                        }}
                        alt="Alternate Text"
                        height={"150"}
                        width={"100%"}
                        />
                </HStack>
            </VStack>

                
                
                
            </Box>
            </HStack>

            <HStack justifyContent="center" marginBottom="1" marginTop="-5">
                <Pressable onPress={handleToggle} bgColor="white" width="85%" rounded="7" padding="3">
                    <HStack justifyContent="space-between">
                        <VStack justifyContent="center"><Text fontSize="xl" fontWeight="bold" color="indigo.600">Banks</Text></VStack>
                        <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}{userData.banks_total}</Text></VStack>
                    </HStack>
                    
                        <Collapse duration={700} isOpen={show}>
                            <FlatList
                            data={userData.banks}
                            vertical
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                // <HStack width="100%">
                                //     <VStack justifyContent="center">
                                //         <Image
                                //             source={{
                                //                 uri: item.logoURL,
                                //             }}
                                //             alt="bank logo"
                                //             height={"25"}
                                //             width={"25"}
                                //             />
                                //     </VStack>
                                //     <VStack justifyContent="center" marginLeft="3">
                                //         <HStack justifyContent="space-between">
                                //             <VStack justifyContent="center"><Text>{item.accountName}</Text></VStack>
                                //             <VStack justifyContent="center"><Text>{rupee.symbol}{item.balance}</Text></VStack>
                                //         </HStack>
                                //         <HStack justifyContent="space-between">
                                //             <VStack justifyContent="center"><Text>{item.bankName}</Text></VStack>
                                //             <VStack justifyContent="center"><Text>{item.lastUpdated}</Text></VStack>
                                //         </HStack>
                                //         <Divider marginY={3} />
                                //     </VStack>
                                // </HStack>
                                <Fragment>
                                <HStack justifyContent="flex-start">
                                    <VStack justifyContent="center" flex="1">
                                        <Image
                                        source={{
                                            uri: item.logoURL,
                                        }}
                                        alt="bank logo"
                                        height={"25"}
                                        width={"25"}
                                        />
                                    </VStack>
                                    <VStack flex="8">
                                        <HStack justifyContent="space-between">
                                            <VStack justifyContent="center"><Text fontSize="md" color="indigo.900">{item.accountName}</Text></VStack>
                                            <VStack justifyContent="center"><Text fontSize="md" color="indigo.900">{rupee.symbol}{item.balance}</Text></VStack>
                                        </HStack>
                                        <HStack justifyContent="space-between">
                                            <VStack justifyContent="center"><Text fontSize="2xs" color="indigo.900" opacity={0.5}>{item.bankName}</Text></VStack>
                                            <VStack justifyContent="center"><Text fontSize="2xs" color="indigo.900" opacity={0.5}>{item.lastUpdated}</Text></VStack>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <Divider marginY={3} />
                                </Fragment>
                            )}
                            />
                        </Collapse>
                    

                </Pressable>
                
            </HStack>
            <HStack justifyContent="center" marginY="1">
                <Box bgColor="white" width="85%" rounded="7" padding="3">
                    <HStack justifyContent="space-between">
                        <VStack justifyContent="center"><Text fontSize="xl" fontWeight="bold" color="indigo.600">Credit Cards</Text></VStack>
                        <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}{userData.creditCards_total}</Text></VStack>
                    </HStack>
                </Box>
            </HStack>
            <HStack justifyContent="center" marginY="1">
                <Box bgColor="white" width="85%" rounded="7" padding="3">
                    <HStack justifyContent="space-between">
                        <VStack justifyContent="center"><Text fontSize="xl" fontWeight="bold" color="indigo.600">Investments</Text></VStack>
                        <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}{userData.investments_total}</Text></VStack>
                    </HStack>
                </Box>
            </HStack>
            <HStack justifyContent="center" marginY="1">
                <Box bgColor="white" width="85%" rounded="7" padding="3">
                    <HStack justifyContent="space-between">
                        <VStack justifyContent="center"><Text fontSize="xl" fontWeight="bold" color="indigo.600">Loans</Text></VStack>
                        <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}{userData.loans_total}</Text></VStack>
                    </HStack>
                </Box>
            </HStack>
            <HStack justifyContent="center" marginY="1">
                <Box bgColor="white" width="85%" rounded="7" padding="3">
                    <HStack justifyContent="space-between">
                        <VStack justifyContent="center"><Text fontSize="xl" fontWeight="bold" color="indigo.600">Property</Text></VStack>
                        <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{rupee.symbol}{userData.property_total}</Text></VStack>
                    </HStack>
                </Box>
            </HStack>
            </VStack>
        </ScrollView>
        </SafeAreaView>
        </Fragment>

    );
};

export default HomeScreen;