import styled from "styled-components"
import Navitem from "./NavItem"

const Wrapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  padding: 20px 10px 33px;
  background-image: url(${({background}) => background});
  background-position: center;
  gap: 16px;
`

const Navbar = ({blok}) =>  {
  console.log(blok.items)
  return (
    <Wrapper background={blok?.background?.filename}>
      {blok.items?.map(item => (
          <Navitem blok={item}/>
  ))}
    </Wrapper>
  )
}


export default Navbar