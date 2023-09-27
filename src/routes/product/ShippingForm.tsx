import { memo, useState } from "react";
const ShippingForm = memo(({ onSubmit }: { onSubmit: (orderDetails: object) => void }) => {
  const [count, setCount] = useState(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // 500ms内不执行任务操作来模拟慢代码
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    }
    onSubmit(orderDetails);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>

      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <br />
      <label>
        Street:
        <input name="street" />
      </label>
      <br />
      <label>
        City:
        <input name="city" />
      </label>
      <br />
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;
