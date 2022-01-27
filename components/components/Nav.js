import styled from "styled-components"
import Navitem from "./NavItem"

const Wrapper = styled.div`
  margin: 32px 0 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  padding: 20px 10px 33px;
  background-image: url(${({background}) => background});
  background-position: center;
  gap: 16px;
`

const Navbar = ({blok}) =>  {
  
  return (
    <Wrapper background={blok?.background?.filename}>
      {blok.items?.map(item => (
          <Navitem key={item._uid} blok={item}/>
  ))}
    </Wrapper>
  )
}


export default Navbar