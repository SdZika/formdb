import { ChangeEvent, FC } from "react";

interface MyProps {
  name: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export const Input: FC<MyProps> = ({ name, type }) => {
  return (
    <label>
      Enter {name}
      <input name={name} type={type} />
    </label>
  );
};

