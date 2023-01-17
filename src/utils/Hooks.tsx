import { useState } from 'react';

export const useForm = <T,>(callback: () => Promise<any>, initalState: T) => {
  const [values, setValues] = useState(initalState);

  // onChange
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // triggering the callback
  };

  // return values
  return {
    onChange,
    onSubmit,
    values,
  };
};
