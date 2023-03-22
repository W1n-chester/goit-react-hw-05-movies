import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0 0 20px 0;
`;

export const Card = styled.li`
  border-radius: 10px;
  overflow: hidden;

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
`;
