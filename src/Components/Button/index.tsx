import { FC } from "react";

interface MyProps {
    name: string;
    type: "submit";
}

export const Button:FC<MyProps> = ({name, type}) => {
    return (
        <button type={type}>{name}</button>
    )
}