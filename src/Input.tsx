import { useState, useCallback } from "react";

export default function Input() {
  const [value, setValue] = useState("Change me");
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
    </div>
  );
}
