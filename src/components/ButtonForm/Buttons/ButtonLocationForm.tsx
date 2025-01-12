"use client";

import { ButtonLocation } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";

type FormProps = Readonly<{
  button: ButtonLocation;
}>;

export function ButtonLocationForm({ button }: FormProps) {
  return (
    <>
      <ButtonActionPayloadForm action={button.action} />
    </>
  );
}
