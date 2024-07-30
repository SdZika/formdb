import { ChangeEvent, useState, FC } from "react";
import { Input } from "../Input";
import { RadioInput } from "../RadioInput";
import { Output } from "../Output";

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

  console.log({
    stateFullName,
    stateUserName,
    statePhoneNumber,
    stateFavCar,
    stateCarAge,
    stateAgree,
  });

  return (
    <>
      <Input
        name="FullName"
        change={updateFullName}
        type="text"
        value={stateFullName}
      />
      <Input
        name="UserName"
        change={updateUserName}
        type="text"
        value={stateUserName}
      />
      <Input
        name="Phone Number"
        change={updatePhoneNumber}
        type="number"
        value={statePhoneNumber}
      />
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
      <Input
        name="Car Age"
        change={updateCarAge}
        type="number"
        value={stateCarAge}
      />
      <Input
        name="Agree"
        change={updateAgree}
        type="checkbox"
        checked={stateAgree}
      />
      <Output name="Full name" value={stateFullName} />
      <Output name="User name" value={stateFullName} />
      <Output name="Phone number" value={stateFullName} />
      <Output name="Favorite Car:" value={stateFullName} />
      <Output name="Car Age:" value={stateFullName} />
      <Output name="User name" value={stateAgree ? "Yes" : "No"} />
    </>
  );
};
