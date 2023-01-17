import { Card } from "primereact/card";
import React from "react";

interface EditorCardProps {
  children: React.ReactNode;
}

function EditorCard({ children }: EditorCardProps) {
  return <Card>{children}</Card>;
}

export default EditorCard;
