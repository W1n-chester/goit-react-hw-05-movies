import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavItem = styled(NavLink)`
  padding: 4px;
  
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
 
  border-radius: 5px;
 
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
