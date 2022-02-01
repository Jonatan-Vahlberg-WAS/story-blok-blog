import SbEditable from "storyblok-react"
import styled from "styled-components"
import Storyblok from "../utils/Storyblok";
import AuthorBlock from "./components/Author"

const Title = styled.p.attrs({ className: "title" })`
  font-size: 32px;
  font-weight: 500;
  margin: 8px 0 16px;
`;

const Text = styled.div.attrs({ className: "text" })`
  color: #2a2a2acc;
`;

const Blogpost = ({blok, story}) => {
  const html = Storyblok.richTextResolver.render(blok.long_text)
  return <SbEditable content={blok}>
    <main className="p-8">
      <AuthorBlock blok={blok.author[0]} inList={false}/>
      <Title>{blok.title}</Title>
      <Text dangerouslySetInnerHTML={{__html:html}}/>
    </main>
  </SbEditable>
}

export default Blogpost