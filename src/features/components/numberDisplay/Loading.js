import {View , Text} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/utility/SpacerComponent";
import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";

const LoadingText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.body};
  text-align:center;
`;

export const Loading = () => {
    return(
        <View>
            <ActivityIndicator
              animating={true}
              color={colors.brand.primary}
              size="large"
            />
            <Spacer position="top" size="large">
              <LoadingText>
                Veuillez patientez pendant que nous générons le numéro...
              </LoadingText>
            </Spacer>
          </View>
    )
}