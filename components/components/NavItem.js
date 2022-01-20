import Link from "next/link"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 20px 10px 33px;
  background-color: #ffffffa0;
  height: 150px;
  display: grid;
  grid-template-rows: min-content 1fr;
  align-items: center;
  border: 0.5px solid #25252540;
`

const Title = styled.p`
  margin-top: 35px;
  font-size: 22px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 0px;
`

const CallToAction = styled.p`
  color: rgba(51,51,51);
  text-align: center;
  width: 100%;
  &:hover{
  color: rgba(111,111,111);
  }
  margin-bottom 16px;
`

const Underline = styled.div`
height: 3px;
background-color: #444444;
margin: 0 42px 16px;
`

const Navitem = ({blok}) => {
  return (
    <Wrapper>
     <Title>{blok.title}</Title>
      <div>
     <Link href={blok.link.cached_url}>

      <a>
        <CallToAction>{blok.call_to_action}</CallToAction>
      </a>
     </Link>
     <Underline/>
      </div>
    </Wrapper>
  )
}

export default Navitem