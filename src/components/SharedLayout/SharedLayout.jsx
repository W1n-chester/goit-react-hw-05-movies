import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem, Wrapper, Nav, List } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Wrapper>
      <Nav>
        <List>
          <li>
            <NavItem to="/">Home</NavItem>
          </li>
          <li>
            <NavItem to="/movies">Movies</NavItem>
          </li>
        </List>
      </Nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
