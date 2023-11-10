import useAuth from '../../hooks/useAuth';
import TuCard from '../../components/common/TuCard';
import TuButton from '../../components/common/TuButton';
import { Link } from 'react-router-dom';
import * as styles from './Dashboard.css';
const Dashboard = () => {
  // HOOK: CONTEXT FOR AUTH
  const { user, logout } = useAuth();

  // CONDITIONAL LOAD: USER ERROR [POSSIBLY REPLACE WITH LOADING STATE]
  if (!user) {
    return (
      <TuCard title='Profile' authform>
        <div className='text-center mb-4'>Cannot Retrieve User</div>
      </TuCard>
    );
  }

  return (
    <TuCard title='Profile' authform>
      <div className='text-center mb-4'>
        <h4>Welcome {user.username}!</h4>
      </div>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      {user.isAdmin && (
        <p>
          <strong>Secret: </strong> Hello Admin - nice to see you here
        </p>
      )}

      {/* Log Out & Forces a Redirect */}
      {user && (
        <div className={styles.btn}>
          <Link to='/store/products'>Buy Now</Link>
          <Link
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </Link>
        </div>
      )}
    </TuCard>
  );
};

export default Dashboard;
