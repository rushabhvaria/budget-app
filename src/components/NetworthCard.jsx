import { Text, VStack, HStack, Image, Collapse, Pressable, FlatList, Divider } from "native-base";
import React, { Fragment, useState} from "react";

const NetworthCard = (props) => {
    const {
        category,
        currencySymbol,
        categoryTotal,
        categoryData,
    } = props;
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (

            <HStack justifyContent="center" marginBottom="1" marginTop="2">
                <Pressable onPress={handleToggle} bgColor="white" width="85%" rounded="7" padding="3">
                    <HStack justifyContent="space-between">
                        <VStack justifyContent="center"><Text fontSize="xl" fontWeight="bold" color="indigo.600">{category}</Text></VStack>
                        <VStack justifyContent="center"><Text fontSize="md" fontWeight="bold" color="indigo.900">{currencySymbol}{categoryTotal}</Text></VStack>
                    </HStack>
                    
                        <Collapse duration={400} isOpen={show} startingHeight={4.5}>
                            <FlatList
                            marginTop={5}
                            data={categoryData}
                            vertical
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Fragment>
                                <HStack justifyContent="flex-start">
                                    <VStack justifyContent="center" flex="1">
                                        <Image
                                        source={{
                                            uri: item.logoURL,
                                        }}
                                        alt="logo"
                                        height={"25"}
                                        width={"25"}
                                        />
                                    </VStack>
                                    <VStack flex="8">
                                        <HStack justifyContent="space-between">
                                            <VStack justifyContent="center"><Text fontSize="md" color="indigo.900">{item.accountName}</Text></VStack>
                                            <VStack justifyContent="center"><Text fontSize="md" color="indigo.900">{currencySymbol}{item.balance}</Text></VStack>
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

    );
};
export default NetworthCard;