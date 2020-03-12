import React from 'react';
import { ButtonProps } from './api';

export default function Button({ title, onClick }: ButtonProps) {
  return <button onClick={onClick}>{title}</button>;
}
