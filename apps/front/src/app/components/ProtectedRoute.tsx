import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { RootState } from '../redux/store';

function ProtectedRoute(props) {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...(isLoggedIn ? props : { element: <Navigate to="/sign-in" /> })}
    />
  );
}

export default ProtectedRoute;
