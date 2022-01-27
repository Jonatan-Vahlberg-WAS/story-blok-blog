import styled from "styled-components"
import BlogListitem from "./BlogListitem"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Bloglist = ({blok}) => {
  console.log("LIST",blok)
  return (
    <Wrapper>
      {blok.items?.map(item => (
        <BlogListitem key={item.uid} blok={item} />
      ))}
    </Wrapper>
  )
} 

export default Bloglist