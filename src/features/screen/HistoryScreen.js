import { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Searchbar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeArea } from "../../components/utility/SafeAreaComponent";
import { Header } from "../components/Header";
import { Spacer } from "../../components/utility/SpacerComponent";
import { NumbersList } from "../components/history/NumbersList";
import styled from "styled-components";
import { NumberContext } from "../../services/NumberContext";

const Wrapper = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const HistoryScreen = () => {
  const [searchNumber, setSearchNumber] = useState("");
  const { numbersList, isLoading, isError } = useContext(NumberContext);
  const navigation = useNavigation();

  const onChangeSearch = (query) => {
    setSearchNumber(query);
  };

  return (
    <SafeArea>
      <Wrapper>
        <IconButton
          icon="arrow-left"
          iconColor="#A5A5A5"
          size={30}
          onPress={() => navigation.navigate("HomePage")}
        />
        <Header />
        <Spacer position="top" size="large" />
        <Searchbar
          placeholder="Rechercher"
          onChangeText={onChangeSearch}
          value={searchNumber}
          keyboardType="numeric"
        />

        <NumbersList
          numbersList={numbersList.filter(num => num.number.toString().includes(searchNumber.toString()))}
          isLoading={isLoading}
          isError={isError}
          searchNumber={searchNumber}
        />
      </Wrapper>
    </SafeArea>
  );
};
