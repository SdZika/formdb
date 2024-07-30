import { ChangeEvent, useState, FC } from "react";
import { Input } from "../Input";
import { RadioInput } from "../RadioInput";

export const Contact: FC = () => {
  const [stateFullName, setFullName] = useState<string>("");
  const [stateUserName, setUserName] = useState<string>("");
  const [statePhoneNumber, setPhoneNumber] = useState<number>(0);
  const [stateFavCar, setFavCar] = useState<string>("");
  const [stateCarAge, setCarAge] = useState<number>(0);
  const [stateAgree, setAgree] = useState<boolean>(false);

  const updateFullName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const updateUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const updatePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) setPhoneNumber(value);
  };
  const updateFavCar = (e: ChangeEvent<HTMLInputElement>) => {
    setFavCar(e.target.value);
  };
  const updateCarAge = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) setCarAge(value);
  };
  const updateAgree = (e: ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };

  return (
    <>
      <Input name="FullName" change={updateFullName} type="text" />
      <Input name="UserName" change={updateUserName} type="text" />
      <Input name="Phone Number" change={updatePhoneNumber} type="text" />
      <p>Select favorite car</p>
      <RadioInput
        name="favCar"
        options={[
          { label: "Ford", value: "Ford" },
          { label: "Toyota", value: "Toyota" },
          { label: "Mercedes", value: "Mercedes" },
        ]}
        selectedValue={stateFavCar}
        onChange={updateFavCar}
      />
      <Input name="Car Age" change={updateCarAge} type="text" />
      <Input name="Agree" change={updateAgree} type="checkbox" />
    </>
  );
};