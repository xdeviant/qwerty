import { ReactNode } from "react";

export interface ITodoButtonProps {
  onClick: () => void;
  text: string;
  icon?: ReactNode;
  danger?: boolean;
}