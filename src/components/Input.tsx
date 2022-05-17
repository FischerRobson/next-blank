/* eslint-disable react/require-default-props */
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label }: InputProps) {
  return (
    <>
      {label ?? null}
      <input />
    </>
  );
}
