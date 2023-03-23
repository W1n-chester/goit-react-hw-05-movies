import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Back = styled(Link)`
display: block;
width: 100px;
text-align: center;
  border: 1px solid #1f2833;
  border-radius: 5px;
  padding: 4px;
  color: #1f2833;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &.active {
    color: #fa6704;
    border: 1px solid #fa6704;
    transform: scale(1.04);
  }
`;
