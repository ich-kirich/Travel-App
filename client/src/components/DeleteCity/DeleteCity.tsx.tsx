import { Box, Typography, NativeSelect, Button } from "@mui/material";
import { useState, useEffect } from "react";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import FetchWrapper from "../FetchWrapper/FetchWrapper";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";

function DeleteCity() {
  const [chooseCity, setChooseCity] = useState("");
  const [isClick, setIsClick] = useState(false);

  const { fetchCities, fetchDeleteCity } = useActions();
  const city = useTypedSelector((state) => state.city);
  useEffect(() => {
    fetchCities();
  }, [city.loading]);
  const { cities, error, loading } = useTypedSelector((state) => state.cities);

  const selectCity = (value: string) => {
    setChooseCity(value);
  };

  const deleteCity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClick(true);
    fetchDeleteCity(Number(chooseCity));
  };

  return (
    <FetchWrapper loading={loading} error={error}>
      <Typography variant="h6" component="h2">
        Select a city for deleting:
      </Typography>
      <NativeSelect
        value={chooseCity}
        onChange={(e) => selectCity(e.target.value)}
        variant="standard"
      >
        <option value="">Select</option>
        {cities.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </NativeSelect>
      <Button variant="contained" fullWidth onClick={deleteCity}>
        Delete City
      </Button>
      {isClick && (
        <FetchWrapper loading={city.loading} error={city.error}>
          <Typography variant="h6" component="h5">
            The city was successfully deleted
          </Typography>
        </FetchWrapper>
      )}
    </FetchWrapper>
  );
}

export default DeleteCity;
