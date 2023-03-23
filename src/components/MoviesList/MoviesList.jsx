import { useLocation } from 'react-router-dom';
import { List, Card, LinkTo, Stand, Title } from './MoviesList.stuled';
export const MoviesList = ({ Movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {Movies.map(({ id, poster_path, title }) => {
          return (
            <Card key={id}>
              <LinkTo to={`/movies/${id}`} state={{ from: location }}>
                <Stand>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  />
                  <Title>{title}</Title>
                </Stand>
              </LinkTo>
            </Card>
          );
        })}
      </List>
    </>
  );
};
