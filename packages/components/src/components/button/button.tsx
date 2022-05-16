import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button className="rounded-md bg-blue-600 text-white px-4 py-2 ml-2">{children}</button>;
};

export default Button;
