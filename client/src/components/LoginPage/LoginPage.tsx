import { TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import { AUTH } from "../../libs/constants";
import Loader from "../Loader/Loader";
import styles from "./LoginPage.module.scss";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { fetchUser } = useActions();
  const { error, loading } = useTypedSelector((state) => state.user);

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    fetchUser(username, password);
    if (!error) {
      dispatch({ type: AUTH.LOGIN });
      navigate("/home");
    }
  };

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
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
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Log In
            </Button>
            <Link className={styles.login__link} to="/registration">
              You don't have an account?
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default LoginPage;