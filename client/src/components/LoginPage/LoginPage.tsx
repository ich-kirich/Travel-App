import { TextField, Button, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import { AUTH } from "../../libs/constants";
import FetchWrapper from "../FetchWrapper/FetchWrapper";
import Loader from "../Loader/Loader";
import PopupComponent from "../PopupComponent/PopupComponent";
import RecoveryPassword from "../RecoveryPassword/RecoveryPassword";
import styles from "./LoginPage.module.scss";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibleChangePass, setVisibleChangePass] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const dispatch = useDispatch();

  const { fetchUser } = useActions();
  const { error, loading } = useTypedSelector((state) => state.user);

  const changePassword = (event: React.MouseEvent) => {
    event.stopPropagation();
    setVisibleChangePass(true);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    fetchUser(username, password);
    setLoginClicked(true);
  };

  useEffect(() => {
    if (loginClicked && !loading && !error) {
      dispatch({ type: AUTH.LOGIN });
      navigate("/home");
    }
  }, [loginClicked, loading, error, dispatch, navigate]);

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Box className={styles.login__wrapper}>
            {error && (
              <Typography
                variant="h6"
                component="h2"
                className={styles.login__title}
              >
                {error}
              </Typography>
            )}
            <Box className={styles.login__form}>
              <Typography
                variant="h6"
                component="h2"
                className={styles.login__title}
              >
                Login
              </Typography>
              <TextField
                label="Enter your Email"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Enter your Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Log In
              </Button>
              <Link className={styles.login__link} to="/registration">
                You don't have an account?
              </Link>
              <Button onClick={changePassword} className={styles.login__forgot}>
                Forgot your password?
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      <PopupComponent
        visible={visibleChangePass}
        setVisible={setVisibleChangePass}
      >
        <RecoveryPassword setVisible={setVisibleChangePass} />
      </PopupComponent>
    </Box>
  );
}

export default LoginPage;
