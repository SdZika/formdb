import { ChangeEvent, useState, FC, FormEvent } from "react";
import { Input } from "../Input";
import { RadioInput } from "../RadioInput";
import { Output } from "../Output";
import { Button } from "../Button";

interface MyProps {
  fullName: string;
  userName: string;
  phoneNumber: number | "";
  favCar: string;
  carAge: number | "";
  agree: boolean;
}

export const Contact: FC = () => {
  const [stateFullName, setFullName] = useState<string>("");
  const [stateUserName, setUserName] = useState<string>("");
  const [statePhoneNumber, setPhoneNumber] = useState<number | "">("");
  const [stateFavCar, setFavCar] = useState<string>("");
  const [stateCarAge, setCarAge] = useState<number | "">("");
  const [stateAgree, setAgree] = useState<boolean>(false);

  const [stateSubmit, setSubmit] = useState<MyProps |  null >(null)

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setSubmit({
      fullName: stateFullName,
      userName: stateUserName,
      phoneNumber: statePhoneNumber,
      favCar:stateFavCar,
      carAge: stateCarAge,
      agree: stateAgree,
    });

    setFullName("");
    setUserName("");
    setPhoneNumber(0);
    setFavCar("");
    setCarAge(0);
    setAgree(false);
  }

 
  return (
    <>
    <form onSubmit={handleSubmit}>
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
      <Button type="submit" name="Submit" />
      </form>
      {stateSubmit && (
        <div>
          <Output name="Full name" value={stateSubmit.fullName} />
          <Output name="User name" value={stateSubmit.userName} />
          <Output name="Phone number" value={stateSubmit.phoneNumber} />
          <Output name="Favorite Car:" value={stateSubmit.favCar} />
          <Output name="Car Age:" value={stateSubmit.carAge} />
          <Output name="User name" value={stateSubmit.agree ? "Yes" : "No"} />
        </div>

      )


      }
     
      
    </>
  );
};
