import { ChangeEvent, FormEvent, useState } from "react";

export function useForm(initialValue: string) {
  const [input, setInput] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("POST : ", input);
  };
  return { input, handleChange, handleSubmit };
}
