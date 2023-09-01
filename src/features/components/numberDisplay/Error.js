import { Text} from "react-native";
import styled from "styled-components";

const LoadingText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.body};
  text-align:center;
`;

export const Error = () => {
    return(
        <LoadingText>
        Une erreur est survenue , veuillez réessayer
      </LoadingText>
    )
}