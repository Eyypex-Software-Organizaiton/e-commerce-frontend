import React, { useState } from "react";

const Orders = () => {
  const [profileOrder, setProfileOrder] = useState(false);
  return (
    <div className="text-3xl mx-10">
      {!profileOrder ? (
        <p className="text-center mt-10">
          Kayıtlı bir sipariş bulunmamaktadır!
        </p>
      ) : (
        <p>Siparişler</p>
      )}
    </div>
  );
};

export default Orders;
