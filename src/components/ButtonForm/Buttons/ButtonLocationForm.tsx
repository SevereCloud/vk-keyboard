"use client";

import { ButtonLocation } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";

type FormProps = Readonly<{
  children: ButtonLocation;
}>;

export function ButtonLocationForm({ children: button }: FormProps) {
  return (
    <>
      <ButtonActionPayloadForm>{button.action}</ButtonActionPayloadForm>
    </>
  );
}
