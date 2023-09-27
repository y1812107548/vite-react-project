import { useState, useCallback } from "react";
import { useFormInput } from "../hook";

export default function Input() {
  const [value, setValue] = useState("Change me");
  const firstNameProps = useFormInput("John");
  const lastNameProps = useFormInput("Doe");
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("useCallback");

      setValue(event.currentTarget.value);
    },
    [setValue]
  );
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>当前值：{value}</p>

      <label >
        First name:
        <input type="text" {...firstNameProps} />
      </label>
      <label >
        <input type="text" {...lastNameProps} />
      </label>
      <p>
        <b>Good morning {firstNameProps.value} {lastNameProps.value}</b>
      </p>
    </div>
  );
}
