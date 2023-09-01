import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import { SafeArea } from "../../components/utility/SafeAreaComponent";
import { Header } from "../components/Header";
import { HomeContent } from "../components/homepage/HomeContent";

const Wrapper = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const HomePageScreen = () => {
  return (
    <SafeArea>
      <Wrapper>
        <Header />
        <HomeContent />
      </Wrapper>
    </SafeArea>
  );
};
