import { View, Text,StyleSheet, TouchableOpacity,Image } from "react-native";
import styled from "styled-components";

const Wrapper = styled(View)`
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding-bottom:${(props) => props.theme.space[1]}
`

const Logo = styled(Image)`
height: 70px;
  width: 120px;
  resize-mode: cover;
`


export const Header = () => {
    return(
        <Wrapper>
            <Logo source={require(`../../image/yellowLogo.png`)} />
            
        </Wrapper>
    )
}

