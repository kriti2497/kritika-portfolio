import React from "react";

const SecondaryButton: React.FC<{ title: string }> = ({ title }) => {
  return <button className="secondary-button">{title}</button>;
};

export default SecondaryButton;
