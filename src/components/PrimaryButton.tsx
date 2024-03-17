import React from "react";

const PrimaryButton: React.FC<{ title: string }> = ({ title }) => {
  return <button className="primary-button">{title}</button>;
};

export default PrimaryButton;
