import styled, {css} from "styled-components"
import {BiDotsVertical} from "react-icons/bi"
import moment from "moment"

const ListStyle = css`
  grid-template-columns: 32px 1fr 20px;
  grid-template-areas: "avatar name menu" "avatar information menu";
  gap: 0 8px;
`

const DetailStyle = css`
  grid-template-columns: 32px auto 1fr 20px;
  grid-template-areas: "avatar name information menu";
  gap: 0 8px;
`

const Wrapper = styled.div`
  display: grid;
  ${({inList}) => inList ? ListStyle : DetailStyle}
  font-size: 12px;
`

const Avatar = styled.img`
  grid-area: avatar;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  align-self: center;
`

const ContentSpan = styled.span`
  grid-area: information;
  align-self: center;
  color: #2a2a2acc;
`

const NameSpan = styled.span`
  grid-area: name;
  align-self: center;
`

const Menu = styled(BiDotsVertical)`
  grid-area: menu;
  align-self: center;
  font-size: 16px;
`

const AuthorBlock = ({blok, inList = false}) => {
  return (
    <Wrapper inList={inList}>
        <Avatar src={blok.thumbnail?.filename}/>
        <NameSpan>{blok.name}</NameSpan>
        <ContentSpan>{moment(blok.published_at).format("MMM D")} · {blok.read_length} min</ContentSpan>
        <Menu/>
    </Wrapper>
  )
}

export default AuthorBlock;