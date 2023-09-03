import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { IconButton, Portal, Modal, Button } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";
import { NumberContext } from "../../../services/NumberContext";
import { Spacer } from "../../../components/utility/SpacerComponent";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts } from "../../../infrastructure/theme/fonts";
import styled from "styled-components";

const optionsList = [1, 25, 50, 100];

export const QuantityModal = ({
  quantity,
  visible,
  increment,
  decrement,
  handleChange,
  hideModal,
}) => {
  const { isLoading, generateNumber } = useContext(NumberContext);
  const navigation = useNavigation();

  const ModalWrapper = styled(Modal).attrs((props) => ({
    contentContainerStyle: {
      backgroundColor: "white",
      margin: 14,
      borderRadius: 10,
    },
  }))``;

  const ModalContent = styled(View)`
    padding: ${(props) => props.theme.space[4]};
  `;

  const ModalTitle = styled(Text)`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.title};
  `;

  const Container = styled(View)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const InputContainer = styled(View)`
    width: 100px;
    align-items: center;
    justify-content: center;
  `;

  const InputText = styled(Text)`
    font-size: 40px;
    text-align: center;
  `;

  const OptionsWrapper = styled(View)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const OptionsContainer = styled(TouchableOpacity)`
    margin-horizontal: 16px;
    background-color: ${colors.brand.gray};
    padding-horizontal: 12px;
    padding-vertical: 4px;
    border-radius: 4px;
  `;

  const OptionsText = styled(Text)`
    font-size: 18px;
  `;

  const GenerateButton = styled(Button).attrs({
    buttonColor: colors.brand.primary,
    textColor: colors.brand.secondary,
    labelStyle: {
      fontSize: 22,
      fontFamily: fonts.body,
      fontWeight: 600,
    },
  })`
    margin-top: ${(props) => props.theme.space[4]};
    border-radius: ${(props) => props.theme.sizes[2]};
    padding: 5px;
  `;

  return (
    <Portal>
      <ModalWrapper visible={visible} onDismiss={hideModal}>
        <ModalContent>
          <ModalTitle>
            {" "}
            Veuillez spécifier le nombre de numéros à générer{" "}
          </ModalTitle>
          <Spacer position="top" size="large">
            <Container>
              <Spacer position="right" size="medium">
                <IconButton
                  icon="minus-thick"
                  iconColor={colors.brand.primary}
                  size={40}
                  onPress={decrement}
                />
              </Spacer>
              <InputContainer>
                <InputText>{quantity}</InputText>
              </InputContainer>
              <Spacer position="left" size="medium">
                <IconButton
                  icon="plus-thick"
                  iconColor={colors.brand.primary}
                  size={40}
                  onPress={increment}
                />
              </Spacer>
            </Container>
          </Spacer>
          <Spacer position="top" size="medium">
            <OptionsWrapper>
              {optionsList.map((elt, id) => {
                return (
                  <OptionsContainer
                    key={id}
                    onPress={() => {
                      handleChange(elt);
                    }}
                  >
                    <OptionsText>{elt}</OptionsText>
                  </OptionsContainer>
                );
              })}
            </OptionsWrapper>
          </Spacer>
          <Spacer position="top" size="large">
            {!isLoading && (
              <GenerateButton
                mode="contained"
                onPress={() => {
                  generateNumber(quantity);
                  navigation.navigate("NumberDisplay");
                }}
              >
                Générer
              </GenerateButton>
            )}
            {isLoading && (
              <Spacer position="top" size="large">
              <ActivityIndicator
                animating={true}
                color={colors.brand.primary}
                size="large"
              />
              </Spacer>
            )}
          </Spacer>
        </ModalContent>
      </ModalWrapper>
    </Portal>
  );
};
