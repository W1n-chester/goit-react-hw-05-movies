import { useLocation } from 'react-router-dom';
import { List, Card, LinkTo } from './MoviesList.stuled';
export const MoviesList = ({Movies}) => {
  const location = useLocation();
  return (
    <>
      <List >
        {Movies.map(mov => {
          return (
            <Card key={mov.id}>
              <LinkTo to={`/movies/${mov.id}`} state={{ from: location }}>
                {mov.title}
              </LinkTo>
            </Card>
          );
        })}
      </List >
    </>
  );
};
