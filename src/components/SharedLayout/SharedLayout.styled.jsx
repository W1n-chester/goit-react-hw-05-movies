import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavItem = styled(NavLink)`
  padding: 4px;
  color: #1f2833;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid #1f2833;
  border-radius: 5px;
  &:hover,
  &:focus,
  &.active {
    color: #fa6704;
    border: 1px solid #fa6704;
  }
`;

export const Nav = styled.nav`
  font-size: 16px;
 
  padding: 20px 20px;

`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 10px;
`;

export const Wrapper = styled.div`
 
`;
