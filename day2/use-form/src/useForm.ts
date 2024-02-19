import { ChangeEvent, useState } from "react";



export function useForm(initialValue: string) {
  const [input, setInput] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

 
  return { input, handleChange };
}


export function useForm2(initialValues: string[]) {

  
  const [input, setInput] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

 
  return { input, handleChange };
}
