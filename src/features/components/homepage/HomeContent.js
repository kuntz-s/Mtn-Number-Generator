import { useContext } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NumberContext } from "../../../services/NumberContext";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts, fontWeights } from "../../../infrastructure/theme/fonts";
import { space } from "../../../infrastructure/theme/spacing";
import { Spacer } from "../../../components/utility/SpacerComponent";
import styled from "styled-components";

const Wrapper = styled(View)`
  flex: 1;
  margin-top: ${(props) => props.theme.space[4]};
`;
const ImageContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const ContactIllustration = styled(Image)`
  height: 250px;
  width: 100%;
  resize-mode: cover;
`;

const GenerateButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  textColor: colors.brand.secondary,
  labelStyle: {
    fontSize: 18,
    fontFamily: fonts.body,
    fontWeight: 600,
  },
})`
  margin-top: ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.sizes[2]};
  padding: 5px;
`;

const HistoryButton = styled(Button).attrs({
  labelStyle: {
    fontSize: 18,
    fontFamily: fonts.body,
    fontWeight:100
  },
  textColor: colors.brand.secondary,
})``;

export const HomeContent = () => {
  const {generateNumber}= useContext(NumberContext);
  const navigation = useNavigation();
  return (
    <Wrapper>
      <ImageContainer>
        <ContactIllustration source={require(`../../../image/dial.png`)} />
      </ImageContainer>
      <Spacer position="top" size="large">
        <GenerateButton
          mode="contained"
          onPress={() => {generateNumber(); navigation.navigate("NumberDisplay")}}
        >
          Générer un numéro
        </GenerateButton>
        <Spacer position="top" size="medium">
          <HistoryButton mode="text" onPress={() => {console.log("enter")}}>
            Consulter l'historique
          </HistoryButton>
        </Spacer>
      </Spacer>
    </Wrapper>
  );
};
