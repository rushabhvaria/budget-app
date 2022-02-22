import React, { Fragment, useState, useEffect } from "react";
import { Text, Button, VStack, HStack, Switch, useColorMode, Heading, ScrollView, Box, Image, Collapse, Pressable, FlatList, Divider } from "native-base";
import {SafeAreaView} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import NetworthCard from "../components/NetworthCard";

const HomeScreen = () => {

    const [userData, setUserData] = useState(
        {
            id: 1,
            totalNetworth: "2,16,171",
            lastUpdated: "4 mins ago",
            banks_total: "1,33,021",
            creditCards_total: "-9,340",
            loans_total: "-31,000",
            investments_total: "1,23,490",
            property_total: "2,21,23,490",
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
            ],
            creditCards: [
                {
                id: 1,
                accountName: "SBI Pulse",
                bankName: "State Bank Of India (...4406)",
                balance: "-18,765",
                lastUpdated: "10 mins ago",
                logoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png"
                },
                {
                id: 2,
                accountName: "HDFC Regalia",
                bankName: "HDFC Bank (...9010)",
                balance: "-23,590",
                lastUpdated: "10 mins ago",
                logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                }
            ],
            loans: [
                {
                id: 1,
                accountName: "Personal Loan",
                bankName: "HDFC Bank (...2210)",
                balance: "-2,30,000",
                lastUpdated: "10 mins ago",
                logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                },
                {
                id: 2,
                accountName: "Home Loan",
                bankName: "Kotak Mahindra Bank (...5732)",
                balance: "-43,60,590",
                lastUpdated: "10 mins ago",
                logoURL: "https://static.smartspends.com/static/images/short_providers_logos/kotak_mahindra_mutual_fund.png"
                },
                {
                id: 3,
                accountName: "Motor Vehicle Loan",
                bankName: "ICICI Bank (...3836)",
                balance: "-6,48,920",
                lastUpdated: "10 mins ago",
                logoURL: "http://www.logotaglines.com/wp-content/uploads/2016/08/ICICI-Logo.png"
                }
            ],
            investments: [
                {
                id: 1,
                accountName: "Zerodha Investments",
                bankName: "Zerodha Kite (...OMP236)",
                balance: "12,23,889",
                lastUpdated: "05 mins ago",
                logoURL: "https://secureservercdn.net/160.153.137.210/0vy.d0c.myftpupload.com/wp-content/uploads/2020/09/Zerodha-1_1.png"
                },
                {
                id: 2,
                accountName: "Mutual Funds",
                bankName: "Axis Mutual Fund (...1890)",
                balance: "2,09,490",
                lastUpdated: "05 mins ago",
                logoURL: "https://www.nfcw.com/wp-content/uploads/2020/06/axis-bank-logo.jpg"
                },
                {
                id: 3,
                accountName: "Sovereign Gold Bond",
                bankName: "HDFC Bank (...2651)",
                balance: "1,10,238",
                lastUpdated: "05 mins ago",
                logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                }
            ],
            property: [
                {
                id: 1,
                accountName: "Residential Property",
                bankName: "Beau Monde Apt (...3101)",
                balance: "98,28,000",
                lastUpdated: "10 mins ago",
                logoURL: ""
                },
                {
                id: 2,
                accountName: "Commercial Showroom",
                bankName: "The Capital (...104)",
                balance: "1,10,66,000",
                lastUpdated: "10 mins ago",
                logoURL: ""
                }
            ]
        }
    );

    const rupee = {symbol: '\u20B9'};
    

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
                  paddingBottom="7"
                  marginBottom="-7"
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

                    <HStack>
                      <Text fontSize="md" color="white">
                        Total Networth
                      </Text>
                    </HStack>

                    <HStack>
                      <VStack justifyContent="center">
                        <Text fontSize="4xl" color="white">
                          {"\u20B9"} {userData.totalNetworth}
                        </Text>
                      </VStack>
                      <VStack justifyContent="center" marginX="3">
                        <FontAwesome5
                          name="long-arrow-alt-right"
                          size={24}
                          color={"#38bdf8"}
                        />
                      </VStack>
                    </HStack>

                    <HStack>
                      <Text fontSize="2xs" color="white" opacity="0.5">
                        Updated {userData.lastUpdated}
                      </Text>
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

              <NetworthCard
                category="Banks"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.banks_total}
                categoryData={userData.banks}
              />
              <NetworthCard
                category="Credit Cards"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.creditCards_total}
                categoryData={userData.creditCards}
              />
              <NetworthCard
                category="Loans"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.loans_total}
                categoryData={userData.loans}
              />
              <NetworthCard
                category="Investments"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.investments_total}
                categoryData={userData.investments}
              />
              <NetworthCard
                category="Property"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.property_total}
                categoryData={userData.property}
              />

              {/* Recent Transactions Section*/}

              <HStack marginTop={7} paddingX={5}>
                <VStack>
                  <Text fontSize="2xl" color="indigo.600" fontWeight="bold">
                    Recent Transactions
                  </Text>
                  <Text fontSize="xs" color="indigo.800" opacity={0.5}>
                    Your most recent transactions across all accounts
                  </Text>
                </VStack>
              </HStack>
              <HStack justifyContent="center" marginBottom="1" marginTop="5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <VStack>
                    <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          Apple Store
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          Shopping
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}4,500
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          Foodhall
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          Food
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}1,200
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          Reebok
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          Shopping
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}2,999
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          Swiggy
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          Food
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}1,500
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          Beirut
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          Food
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}2,660
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </HStack>
              {/* <FontAwesome5
                name="angle-double-down"
                size={48}
                color={"indigo.600"}
              /> */}

                {/* Recent Transactions Section*/}
              <HStack marginTop={7} paddingX={5}>
                <VStack>
                  <Text fontSize="2xl" color="indigo.600" fontWeight="bold">
                    Payment Reminders
                  </Text>
                  <Text fontSize="xs" color="indigo.800" opacity={0.5}>
                    Your monthly payment reminders
                  </Text>
                </VStack>
              </HStack>
              <HStack justifyContent="center" marginBottom="1" marginTop="5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <VStack>
                    <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="red.500"
                        >
                          Credit card
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          05/11/2021
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="red.500"
                        >
                          {rupee.symbol}3,500
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          Phone Bill
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          07/11/2021
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}400
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          House EMI
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          13/11/2021
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}45,000
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </HStack>
              {/* <FontAwesome5
                name="angle-double-down"
                size={48}
                color={"indigo.600"}
              /> */}
            </VStack>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
};

export default HomeScreen;