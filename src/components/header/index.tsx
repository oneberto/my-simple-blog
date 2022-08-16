import React from "react";
import "./styles.scss";

interface IProps {
  title: string;
  button?: {
    onClick(): void;
    label: string;
  };
}

const Header = ({ title, button }: IProps) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      {button && (
        <button type="button" onClick={button.onClick}>
          {button.label}
        </button>
      )}
    </div>
  );
};

export default Header;
