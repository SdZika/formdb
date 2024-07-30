import { ChangeEvent, FC } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioInputProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput: FC<RadioInputProps> = ({ name, options, selectedValue, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          {option.label}
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
};
