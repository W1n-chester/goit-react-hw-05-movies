
import { Back } from './BackLink.styled';
export const BackLink = ({ to, children }) => {
  return <Back to={to}>{children}</Back>;
};
