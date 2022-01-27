import Link from "next/link";
import styled from "styled-components";
import AuthorBlock from "./Author";
import Divider from "./Divider";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 330px;
  border: 0.5px solid #25252540;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 34px 1fr 20px;
  padding: 16px;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextContainer = styled.div`
  cursor: pointer;
  &:hover {
    & p {
      color: #aaaaaa;
    }
  }
`;

const Title = styled.p.attrs({ className: "title" })`
  font-size: 25px;
  font-weight: 500;
  margin: 8px 0 16px;
`;

const Text = styled.p.attrs({ className: "text" })`
  color: #2a2a2acc;
`;

const BlogListitem = ({ blok }) => {
  console.log(blok.link)
  return (
    <Wrapper>
      <ContentImage src={blok.image.filename} />
      <ContentWrapper>
        <AuthorBlock blok={blok.author[0]} inList={true} />
        <Link href={`/${blok.link.cached_url}`}>
          <a>
            <TextContainer>
              <Title>{blok.title}</Title>
              <Text>{blok.preamble}</Text>
            </TextContainer>
          </a>
        </Link>
        <div>
          <Divider style={{ margin: `0 0 16px` }} />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default BlogListitem;
