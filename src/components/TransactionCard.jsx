import { Text, VStack, HStack, Image, Collapse, Pressable, FlatList, Divider } from "native-base";
import React, { Fragment, useState} from "react";

const TransactionCard = (props) => {
    const convertToINR = (cover) => {
        return cover.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
        })}

    return (
        <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          {props.transactionData.accountName}
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          {props.transactionData.transactionCategory}
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {convertToINR(props.transactionData.balance)}
                        </Text>
                      </VStack>
                    </HStack>
    );
};
export default TransactionCard;