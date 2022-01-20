import Link from "next/Link";
import { useEffect, useState } from "react";
import CallToAction from "./CallToAction";
import { useInterval } from "usehooks-ts";
import styled from "styled-components"

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  margin-right: 16px;
  padding: 24px;
  transform: translateY(-50%) !important;
  background-color #fafafa60
`

const Title = styled.h1.attrs({className:"text-4xl font-bold text-black text-"})`

`

const Subtitle = styled.p.attrs({className:"text-xl"})`
  color: #222222;
`

const Hero = ({ blok }) => {
  const [image, setImage] = useState({ image: { filename: "/white.jpeg" } });
  const [index, setIndex] = useState(0);
  useEffect(() =>{
    if(blok){
      setImage(blok.images[0])
      setIndex(0)
    }
  },[blok])
  useInterval(() => {
    if (!blok) return;
    if (blok.images.length <= index) {
      setImage(blok.images[0]);
      setIndex(1);
      return;
    }
    setImage(blok.images[index]);
    setIndex(index + 1);
  }, 8000);
  return (
    <div className="relative">
      <img src={image.image.filename} className="w-full" />
      <TextWrapper>
        <Title>{image.title}</Title>
        <Subtitle>{image.subtitle}</Subtitle>
      </TextWrapper>
    </div>
  );
};

export default Hero;
