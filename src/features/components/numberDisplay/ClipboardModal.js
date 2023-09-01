import {  Text } from "react-native";
import { IconButton, Portal, Modal } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const ClipboardModal = ({ visible, hideModal, copyToClipboard }) => {
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 20,
    minHeight: 150,
    borderRadius: 20,
    alignItems: "center",
  };

  const textContainerStyle = {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Roboto_400Regular",
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <IconButton
          icon="clipboard-outline"
          iconColor={colors.brand.primary}
          size={40}
          onPress={() => copyToClipboard(numbersList[0].number)}
        />
        <Text style={textContainerStyle}>
          Numéro copié dans le presse-papier.
        </Text>
      </Modal>
    </Portal>
  );
};
