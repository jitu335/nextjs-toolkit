import { useDispatch, useSelector } from "react-redux";

export const Login = () => {

    const dispatch = useDispatch();

    function handleLogin(e) {
        e.preventDefault();
        dispatch(setAuthState(true));
        dispatch(setAuthUser(e.target.user.value));
      }


  return (
    <div>Login
    <form className="flex space-x-2" onSubmit={handleLogin}>
      <div className="input-box">
        <input id={`user`} type={`text`} placeholder={`Set username`} />
      </div>
      <button type={`submit`}>login</button>
    </form>
    
    
    </div>
  )
}
