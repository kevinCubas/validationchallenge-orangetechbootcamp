import React from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isdisabled: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}