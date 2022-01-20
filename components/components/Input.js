import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #f1f2f3;
  color: #252525;
  border: none;
  padding: 8px 4px;
  width: 100%;
`;

const Input = ({ value, onChange = (e) => {}, blok, ...props }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      {blok.label && <label htmlFor={blok.name}>{blok.label}</label>}
      <StyledInput
        value={value}
        onChange={onChange}
        name={blok.name}
        placeholder={blok.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
