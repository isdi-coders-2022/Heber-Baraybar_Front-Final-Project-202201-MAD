// import React, { useState } from 'react';
import './.logout.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import * as action from '../../../redux/actions/action-student/action-creators-student';
// import { logout } from '../../../redux/actions/action-student/action-creators-student';

function Logout() {
  // const [useForm, setUserForm] = useState({});
  // const dispatch = useDispatch();
  // function handlesChange(ev: any) {
  //   setUserForm({ ...useForm, [ev.target.name]: ev.target.value });
  // }
  // async function handleSubmit(ev: any) {
  //   ev.preventDefault();
  //   try {
  //     const result = await logout(useForm);
  //     console.log(result);
  //     dispatch(action.logout({ ...result.data, isLogged: true }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // return (
  //   <divzz className="logout">
  //     <p className="logout__name">Hola</p>
  //     {/* <button className="logout_-button" type="submit" onSubmit={handleSubmit}>
  //       Logout
  //     </button> */}
  //   </div>
  // );
}
export default Logout;

// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { UserForm } from './user-form.js';
// import * as actions from '../../redux/user/action-creators';

// export function UserButtons() {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegistration, setShowRegistration] = useState(false);

//   const handleLogin = () => {
//     if (user.isLogged) {
//       dispatch(action.logout());
//     } else {
//       setShowLogin(true);
//     }
//   };

//   const handleRegistration = () => {
//     setShowRegistration(true);
//   };

//   return (
//     <div>
//       {!showLogin && (
//         <button type="submit" onClick={handleLogin}>
//           {user.isLogged ? 'Logout' : 'Login'}
//         </button>
//       )}
//       {!showLogin && !user.isLogged && (
//         <button type="submit" onClick={handleRegistration}>
//           Registration
//         </button>
//       )}
//       {showLogin && <UserForm setShowForm={setShowLogin} mode="login" />}
//       {showRegistration && (
//         <UserForm setShowForm={setShowRegistration} mode="registration" />
//       )}
//     </div>
//   );
// }
// export default UserButtons;
