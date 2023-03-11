import React from "react";

export interface IButton{
  children: React.ReactNode;
  className: string;
  onClick: ()=> void;
}