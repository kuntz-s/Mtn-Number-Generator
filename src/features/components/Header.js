import { View, Text,StyleSheet, TouchableOpacity,Image } from "react-native";
import styled from "styled-components";

const Wrapper = styled(View)`
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding-vertical:${(props) => props.theme.space[1]}
`

const Logo = styled(Image)`
height: 60px;
  width: 105px;
  resize-mode: cover;
`


export const Header = () => {
    return(
        <Wrapper>
            <TouchableOpacity onPress={() => console.log("stephane")}>
            <Logo source={require(`../../image/yellowLogo.png`)} />
            </TouchableOpacity>
        </Wrapper>
    )
}

