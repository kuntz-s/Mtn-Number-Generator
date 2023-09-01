import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/utility/SpacerComponent";
import { fonts } from "../../../infrastructure/theme/fonts";
import { colors } from "../../../infrastructure/theme/colors";
import styled from "styled-components";

const Wrapper = styled(ScrollView)`
  flex: 1;
  padding-vertical: ${(props) => props.theme.space[2]};
  background-color: white;
`;

const TextDisplay = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  margin-top: ${(props) => props.theme.space[2]};
`;

const NumberButton = styled(Button).attrs({
  labelStyle: {
    fontSize: 20,
    fontFamily: fonts.body,
    fontWeight: 100,
  },
  textColor: colors.brand.secondary,
})``;

export const NumbersList = ({ numbersList, isLoading, isError }) => {
  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      {isLoading && <TextDisplay>Chargement des numéros...</TextDisplay>}

      {isError && <TextDisplay>Une erreur est survenue</TextDisplay>}
      {!isLoading && !isError && (
        <Spacer position="top" size="medium">
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              display: numbersList.length === 0 ? "none" : "flex",
            }}
          >
            {numbersList.length} numéros trouvés
          </Text>
          {numbersList.length === 0 ? (
            <TextDisplay>Aucun numéro trouvé</TextDisplay>
          ) : (
            numbersList.map((num) => {
              return (
                <Spacer position="top" size="large" key={num.id}>
                  <NumberButton mode="text" icon="sim">
                    {num.number}{" "}
                  </NumberButton>
                </Spacer>
              );
            })
          )}
        </Spacer>
      )}
    </Wrapper>
  );
};
