import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const titleSizes = {
  normal: {
    'font-size': '2.8em',
  },
  jumbo: {
    'font-size': '6em',
  },
};

const Title = styled.h1`
  color: ${({ color }) => colors[color]};
  font-size: ${({ size }) => titleSizes[size]['font-size']};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 0 0 30px 0;
`;
Title.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.number,
};
Title.defaultProps = {
  color: 'blue',
  fontWeight: 'bold',
  size: 'normal',
};
export default Title;
