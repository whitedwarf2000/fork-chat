import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BaseFlex } from '../BaseStyles';

const areaSize = {
  large: '3.750em', // 60px base 16px
  medium: '3.125em', // 50px base 16px
  small: '2.5em', // 40px base 16px
};

const Area = styled.textarea`
  background-color: transparent;
  border: 0;
  overflow: auto;
  padding: 8px 9px;
  resize: none;
  width: 100%;
  height: ${props => (props.hasQuote ? areaSize.large : areaSize[props.size] || areaSize.medium)};
`;
const AreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  border-radius: var(--border-radius-large);
  padding: 0.625em 1em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const ControlWrapper = styled(BaseFlex)`
  margin: 0 1em;
`;

const TextArea = React.forwardRef(({ size, controls, quote, ...rest }, ref) => {
  return (
    <AreaWrapper>
      {quote}
      <BaseFlex>
        <Area ref={ref} size={size} hasQuote={quote} {...rest} />
        <ControlWrapper>{controls}</ControlWrapper>
      </BaseFlex>
    </AreaWrapper>
  );
});

TextArea.displayName = 'TextArea';
TextArea.propTypes = {
  controls: PropTypes.any,
  quote: PropTypes.any,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default TextArea;
