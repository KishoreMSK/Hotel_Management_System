import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";


const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
      <Heading as='h1'>
        Click on the Vite and React logos to learn more
      </Heading>
      <Button>Check in</Button>
      <Button>Check out</Button>
      <Heading as='h2'>
        Click on the Vite and React logos to learn more
      </Heading>
      <Heading as='h3'>
        Click on the Vite and React logos to learn more
      </Heading>
      <Input placeholder="enter cabin"></Input>
      </StyledApp>
    </>
  )
}

export default App
