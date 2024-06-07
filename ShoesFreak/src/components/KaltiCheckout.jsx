import React, { useState } from "react";

const KhaltiPayment = () => {
  const [response, setResponse] = useState(null);

  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    setLoading(true);

    setResponse(null);

    try {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://a.khalti.com/api/v2/epayment/initiate/",
        {
          method: "POST",
          headers: {
            Authorization:
              "key test_public_key_3d8c57b2203e43198d1fbbab382500c1",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            return_url: "http://localhost:5173/",
            website_url: "http://localhost:5173/",
            amount: "1000",
            purchase_order_id: "Order01",
            purchase_order_name: "test",
            customer_info: {
              name: "Ram Bahadur",
              email: "test@khalti.com",
              phone: "9800000001",
            },
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok " + res.statusText);
      }

      const data = await res.json();

      setResponse(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={initiatePayment}
        disabled={loading}
        className=" bg-[#5FBF8F] text-white px-3 py-1 rounded-md hover:bg-[#458D69]"
      >
        {loading ? "Processing..." : "Pay with Khalti"}
      </button>
    </div>
  );
};

export default KhaltiPayment;
