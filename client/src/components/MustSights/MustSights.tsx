import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ICityProps, ISights } from "../../types/types";
import DetailsSight from "../DetailsSight/DetailsSight";
import ModalComponent from "../ModalComponent/ModalComponent";
import PopupSights from "../ListSights/ListSights";
import ViewError from "../ViewError/ViewError";
import styles from "./MustSights.module.scss";

function MustSights(props: ICityProps) {
  const { city } = props;
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [visible, setVisible] = useState(false);
  const [chooseSight, setChooseSight] = useState<ISights>({} as ISights);

  const changeVisibleDetails = (sight: ISights) => {
    setVisibleDetails(true);
    setChooseSight(sight);
  };

  const changeVisible = () => {
    setVisible(true);
  };

  return (
    <Box>
      {!city.sights || city.sights.length === 0 ? (
        <ViewError>No sights Found</ViewError>
      ) : (
        <Box className={styles.signts__wrapper}>
          <Box
            sx={{
              backgroundImage: `url(${city.sights[0].image})`,
            }}
            className={styles.sight__first}
            onClick={() => changeVisibleDetails(city.sights![0])}
          />
          <Box className={styles.wrapper}>
            {city.sights.length >= 2 && (
              <Box
                sx={{
                  backgroundImage: `url(${city.sights[1].image})`,
                }}
                className={styles.sight__second}
                onClick={() => changeVisibleDetails(city.sights![1])}
              />
            )}
            <Box className={styles.sight__wrapper}>
              {city.sights.length >= 3 && (
                <Box
                  sx={{
                    backgroundImage: `url(${city.sights[2].image})`,
                  }}
                  className={styles.sight__third}
                  onClick={() => changeVisibleDetails(city.sights![2])}
                />
              )}
              {city.sights.length >= 4 && (
                <Box className={styles.sight__amount} onClick={changeVisible}>
                  <Typography
                    variant="h6"
                    component="h5"
                    className={styles.amount__text}
                  >
                    {city.sights.length}+
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
      <ModalComponent visible={visibleDetails} setVisible={setVisibleDetails}>
        <DetailsSight sight={chooseSight} />
      </ModalComponent>
      <ModalComponent visible={visible} setVisible={setVisible}>
        <ListSights city={city} />
      </ModalComponent>
    </Box>
  );
}

export default MustSights;
