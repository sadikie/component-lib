import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: ${({ color }) => colors[color]};
background: ${({ bgColor })  => colors[bgColor]};
border-radius: 0;
-webkit-appearance: none;
border: 1px solid #c2c2c2;
height: 45px;
`;
Input.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
};
Input.defaultProps = {
  color: 'blue',
  bgColor: 'white',
};
export default Input;