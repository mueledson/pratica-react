import { Tittle, Container, Logo } from "./App"
import logoImg from "./assets/react.svg";
import { MdMenu } from 'react-icons/md'

function App() {

  return (
    <Container>
        <Logo>
          <img src={logoImg} className="menu"/>
        </Logo>
      
        <Tittle>Hello World! <MdMenu  className="menu"/> </Tittle>
    </Container>
  )
}

export default App