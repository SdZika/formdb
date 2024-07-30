import { ChangeEvent, FC } from "react";

interface MyProps {
  name: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value?: string | number;
  checked?: boolean;
}

export const Input: FC<MyProps> = ({ name, change, type, value, checked }) => {
  return (
    <label>
      Enter {name}
      <input
        name={name}
        type={type}
        value={value}
        checked={checked}
        onChange={change}
      />
    </label>
  );
};
