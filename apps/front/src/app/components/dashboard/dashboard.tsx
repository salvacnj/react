import { useSelector } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

import './dashboard.module.scss';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <h1>Welcome to Dashboard! {user?.email}</h1>

      <ul>
        <li>
          <Link to="/">dashboard root</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
