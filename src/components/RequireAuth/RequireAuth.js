import { useData } from 'contexts/DataContext';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'utils/constants';

const Validate = ({ children }) => {
  const { isLoggedIn } = useData();
  return isLoggedIn ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default Validate;
