import styled from "styled-components"

const DividerLine = styled.div`
  position: relative;
  margin: 32px 0px;
  border-top: ${({theme, color, lineStyle}) => `0.5px ${lineStyle} ${color}`};
  ${({theme}) => console.log(theme)}
  `
const LineText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  padding: 4px 8px;
  background-color: #fff;
  border: ${({theme, color, lineStyle}) => `0.5px ${lineStyle} ${color}`};
`

const Divider = ({blok}) => {
  
  return (
    <div className="w-full">
      <DividerLine lineStyle={blok.style} color={blok.color}>
        {blok.text && <LineText lineStyle={blok.style} color={blok.color}>{blok.text}</LineText>}
      </DividerLine>
    </div>
  )
}


export default Divider