import { View, Image } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts } from "../../../infrastructure/theme/fonts";
import { Spacer } from "../../../components/utility/SpacerComponent";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

const Wrapper = styled(View)`
  flex: 1;
  margin-top: ${(props) => props.theme.space[4]};
`;
const ImageContainer = styled(View)`
  flex:1;
  flex-direction: row;
  justify-content: center;
`;

const ButtonContainer = styled(View)`
  margin-vertical: ${(props) => props.theme.space[2]}
`

const ContactIllustration = styled(Image)`
  height: 100%;
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
})`padding: 5px;`;

export const HomeContent = ({showModal}) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <ImageContainer>
        <ContactIllustration source={require(`../../../image/dial.png`)} />
      </ImageContainer>
      <ButtonContainer>
        <GenerateButton
          icon="autorenew"
          mode="contained"
          onPress={() => {showModal()}}
        >
          Générer un numéro
        </GenerateButton>
        <Spacer position="top" size="medium">
          <HistoryButton mode="text" onPress={() => {navigation.navigate("History")}}>
            Consulter l'historique
          </HistoryButton>
        </Spacer>
        </ButtonContainer>
    </Wrapper>
  );
};
