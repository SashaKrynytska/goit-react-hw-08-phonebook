import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <>
      <NavLink to="contacts">Contacts</NavLink>
      <div>
        <p>
          Welcome,<span>{user.name}</span>
        </p>

        <button type="button" onClick={onLogOut}>
          Logout
        </button>
      </div>
    </>
  );
};
