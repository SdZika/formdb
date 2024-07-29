import { ChangeEvent, useState, FC } from "react";
import { Input, RadioInput } from "../Input";

export const Contact: FC = () => {
  const [stateFullName, setFullName] = useState<string>("");
  const [stateUserName, setUserName] = useState<string>("");
  const [statePhoneNumber, setPhoneNumber] = useState<Number>(0);
  const [stateFavCar, setFavCar] = useState<string>("");
  const [stateCarAge, setCarAge] = useState<Number>(0);
  const [stateAgree, setAgree] = useState<boolean>(false);

  const updatefullName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const updateUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const updatePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(Number(e.target.value));
  };
  const updateFavCar = (e: ChangeEvent<HTMLInputElement>) => {
    setFavCar(e.target.value);
  };
  const updateCarAge = (e: ChangeEvent<HTMLInputElement>) => {
    setCarAge(Number(e.target.value));
  };
  const updateAgree = (e: ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };

  return (
    <>
      <Input name="FullName" change={updatefullName} type="text" />
      <Input name="UserName" change={updateUserName} type="text" />
      <Input name="Phone Number" change={updatePhoneNumber} type="text" />
      <RadioInput
        label="ford"
        name="Fav Car"
        change={updateFavCar}
        type="radio"
      />
      <RadioInput
        label="toyota"
        name="Fav Car"
        change={updateFavCar}
        type="radio"
      />
      <RadioInput
        label="Mercedes"
        name="Fav Car"
        change={updateFavCar}
        type="radio"
      />
      <Input name="Car Age" change={updateCarAge} type="text" />
      <Input name="Agree " change={updateAgree} type="checkbox" />
    </>
  );
};
