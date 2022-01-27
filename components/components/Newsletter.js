
import styled from 'styled-components';
import Storyblok from '../../utils/Storyblok';
import Button from './Button';
import Input from './Input';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  border: 1px solid #25252560;
  padding: 4px;
  gap: 24px;
  text-align: center;
  margin: 0 32px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
`

const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
`

const TextWrapper = styled.div`
  text-align: center;
`

const SubscribeBox = styled.div`
  border: 1px solid #252525cc;
  padding: 32px 16px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
`

const Newsletter = ({blok}) => {
  const html = Storyblok.richTextResolver.render(blok.text)
  
  return (
    <Wrapper>
      <img src={blok.image.filename}/>
      <ContentWrapper>
        <Title>{blok.title}</Title>
        <TextWrapper dangerouslySetInnerHTML={{__html: html}}/>
        <SubscribeBox>
          {blok.input && <Input blok={blok.input[0]}/>}
          {blok.button && <Button blok={blok.button[0]}/>}
        </SubscribeBox>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Newsletter