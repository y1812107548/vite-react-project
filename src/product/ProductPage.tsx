import { useCallback } from "react";
import ShippingForm from "./ShippingForm";

export default function ProductPage({
  referrerId,
  productId,
  theme,
}: {
  referrerId: string;
  productId: number;
  theme: string;
}) {
  const handleSubmit = useCallback((orderDetails:object)=>{
    post('/product/' + productId + 'buy',{
      referrerId,
      ...orderDetails
    })
  },[productId,referrerId])
  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit}></ShippingForm>
    </div>
  );
}

function post(url: string, data: object) {
  console.log("post", url, data);
}
