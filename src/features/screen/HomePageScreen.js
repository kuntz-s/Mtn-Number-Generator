import { useState } from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import styled from "styled-components";
import { SafeArea } from "../../components/utility/SafeAreaComponent";
import { Header } from "../components/Header";
import { HomeContent } from "../components/homepage/HomeContent";
import { QuantityModal } from "../components/homepage/QuantityModal";

const Wrapper = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const HomePageScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);

  const hideModal = () => setVisible(false);
  const showModal = () => setVisible(true);
  const handleChange = (query) => {
   setQuantity(query)
  };
  const increment = () => {
    if(quantity < 100){
      setQuantity((prev) => prev + 1)
    }
  };
  const decrement = () => {
    if(quantity > 1){
      setQuantity((prev) => prev - 1)
    }
  };
  return (
    <SafeArea>
      <PaperProvider>
        <Wrapper>
          <Header />
          <HomeContent showModal={showModal} />
        </Wrapper>
        <QuantityModal
          visible={visible}
          hideModal={hideModal}
          quantity={quantity}
          handleChange={handleChange}
          increment={increment}
          decrement={decrement}
        />
      </PaperProvider>
    </SafeArea>
  );
};
