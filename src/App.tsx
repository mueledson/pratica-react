import { Tittle, Container, Logo } from "./App"
import logoImg from "./assets/react.svg";
import { MdMenu } from 'react-icons/md'

function App() {

  return (
    <Container>
        <Logo>
          <img src={logoImg} className="menu"/>
        </Logo>
      
        <Tittle>Hello World!</Tittle><Logo><MdMenu className="menu2"/></Logo> 
    </Container>
  )
}

export default App