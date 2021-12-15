import { Route, Link } from 'react-router-dom';

import './dashboard.module.scss';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <div>
      <h1>Welcome to Dashboard!</h1>

      <ul>
        <li>
          <Link to="/">dashboard root</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
