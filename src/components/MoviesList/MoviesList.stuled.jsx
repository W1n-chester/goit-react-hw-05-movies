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
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: #1f2833;
`;
export const Stand = styled.div`
  width: 250px;
  height: 440px;
  background-color: #fafafa;

  img {
    width: 250px;
    height: 375px;
  }
`;
export const Title = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px 5px;
  font-size: 16px;
`;
