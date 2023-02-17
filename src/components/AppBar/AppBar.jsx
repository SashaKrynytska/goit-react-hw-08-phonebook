import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const bodyRef = document.querySelector('body');

  isLoggedIn
    ? bodyRef.classList.add('isLoggedIn')
    : bodyRef.classList.remove('isLoggedIn');

  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <Suspense fallback={<div style={{ padding: '0 20px' }}>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

AppBar.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default AppBar;
