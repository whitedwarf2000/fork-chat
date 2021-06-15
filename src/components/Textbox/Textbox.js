import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const inputSize = {
  large: '2.5em', // 40px
  medium: '1.875em', // 30px
  small: '1.250em', // 20px
};

const Input = styled.input`
  background-color: var(--mv-bg-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0.625em 1em;
  margin-bottom: 5px;
  width: 100%;
  height: ${props => inputSize[props.size] || inputSize.medium};
`;

const InputWrapper = styled.div`
  margin: 10px 0;
`;

const InputLabel = styled.div`
  color: var(--color-700);
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  margin-left: 10px;
  letter-spacing: 0.6px;
`;

const InputError = styled(InputLabel)`
  color: var(--color-error);
`;

const Textbox = React.forwardRef(({ errorMessage, size, label, ...rest }, ref) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <Input ref={ref} size={size} {...rest} />
      <InputError>{errorMessage}</InputError>
    </InputWrapper>
  );
});

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default Textbox;
