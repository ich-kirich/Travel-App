import { Box, Typography } from "@mui/material";
import RecommendsCart from "../RecommendsCart/RecommendsCart";
import styles from "./RecommendsBlock.module.scss";

function RecommendsBlock() {
  return (
    <Box>
      <Box className={styles.header__wrapper}>
        <Box className={styles.title__wrapper}>
          <Typography variant="h6" component="h2" className={styles.title}>
            Daily Scenery
          </Typography>
          <Box className={styles.hot}>Updated</Box>
        </Box>
        <Typography variant="h6" component="h5" className={styles.more}>
          More
        </Typography>
      </Box>
      <RecommendsCart />
    </Box>
  );
}

export default RecommendsBlock;