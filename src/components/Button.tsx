import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, onClick, ...props }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      {...props}
    >
      {text}
    </button>
  );
}
