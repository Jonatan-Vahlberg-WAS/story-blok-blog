import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 4px 8px;
  width: 100%;
  font-weight: 400;

  ${({styles: {color, background}}) => `
  background-color: ${background};
  color: ${color};

  &:hover {
    filter: brightness(95%);
  }

  &:disabled {
    filter: brightness(175%);
    cursor: not-allowed;
    &:hover {
      filter; brightness(120%);
    }
  }
  `}
`;

const Button = ({ onClick = (e) => {}, disabled = false, blok, ...props }) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      styles={{
        color: blok.color,
        background: blok.background_color
      }}
      {...props}
    >
      {blok.title}
    </StyledButton>
  );
};

export default Button;
