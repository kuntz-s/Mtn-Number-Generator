import { useState, useContext } from "react";
import * as Clipboard from "expo-clipboard";
import { View, Text, Image } from "react-native";
import { IconButton, PaperProvider, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeArea } from "../../components/utility/SafeAreaComponent";
import { NumberContext } from "../../services/NumberContext";
import { Spacer } from "../../components/utility/SpacerComponent";
import { colors } from "../../infrastructure/theme/colors";
import { Loading } from "../components/numberDisplay/Loading";
import { Error } from "../components/numberDisplay/Error";
import { ClipboardModal } from "../components/numberDisplay/ClipboardModal";
import { fonts } from "../../infrastructure/theme/fonts";
import styled from "styled-components";

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

const ImageWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const Logo = styled(Image)`
  height: 70px;
  width: 140px;
  resize-mode: cover;
`;

const NumberContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const GeneratedNumText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.brand.secondary};
  letter-spacing: ${(props) => props.theme.space[1]};
`;

const HistoryButton = styled(Button).attrs({
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

const GoBackButton = styled(Button).attrs({
  labelStyle: {
    fontSize: 18,
    fontFamily: fonts.body,
    fontWeight: 100,
  },
  textColor: colors.brand.secondary,
})`padding: 5px;`;

export const NumberDisplayScreen = () => {
  const { numbersList, isLoading, isError } = useContext(NumberContext);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };

  const copyToClipboard = async (number) => {
    await Clipboard.setStringAsync(number.toString());
    showModal();
  };
  return (
    <SafeArea>
      <PaperProvider>
        <Wrapper>
          {isLoading && <Loading />}
          {isError && <Error />}

          {!isLoading && !isError && (
            <View>
              <ImageWrapper>
                <Logo source={require(`../../image/yellowLogo.png`)} />
              </ImageWrapper>
              <Spacer position="top" size="large">
                <NumberContainer>
                  <GeneratedNumText>{numbersList[0].number}</GeneratedNumText>
                  <Spacer position="top" size="small">
                    <IconButton
                      icon="clipboard-outline"
                      iconColor="#C8C6AF"
                      size={30}
                      onPress={() => copyToClipboard(numbersList[0].number)}
                    />
                  </Spacer>
                </NumberContainer>
              </Spacer>
              <Spacer position="top" size="large">
                <HistoryButton
                  icon="history"
                  mode="contained"
                  onPress={() => {
                    navigation.navigate("History");
                  }}
                >
                  Consulter l'historique
                </HistoryButton>
                <Spacer position="top" size="medium">
                  <GoBackButton
                    mode="text"
                    icon="arrow-right"
                    onPress={() => {
                      navigation.navigate("HomePage")
                    }}
                  >
                    Retour
                  </GoBackButton>
                </Spacer>
              </Spacer>
            </View>
          )}
        </Wrapper>
        <ClipboardModal
          visible={visible}
          hideModal={hideModal}
          copyToClipboard={copyToClipboard}
        />
      </PaperProvider>
    </SafeArea>
  );
};
