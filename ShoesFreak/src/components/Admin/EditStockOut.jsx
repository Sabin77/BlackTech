import React, { useState, useEffect } from "react";
import axios from "axios";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import DefaultImg from "../../assets/default_shoes.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

function EditStockOut({ stock, closeEdit }) {
  console.log("Received stock:", stock);

  const [productDetails, setProductDetails] = useState([]);
  const [supplierName, setSupplierName] = useState([]);
  const [stockOutDetails, setStockOutDetails] = useState({
    availableQuantity: "",
    quantity_out: "",
    price: "",
    buyerName: "",
    buyerPhone: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  // Fetch product details
  const getProductDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/getallnames"
      );
      setProductDetails(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Fetch supplier names
  const getAllSupplierNames = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/supplier/getallnames"
      );
      setSupplierName(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Initialize form fields with product data when component mounts
  useEffect(() => {
    if (stock) {
      setStockOutDetails({
        availableQuantity: stock.availableQuantity + stock.quantity_out || 0,
        quantity_out: stock.quantity_out || "",
        price: stock.price || "",
        buyerName: stock.buyerName || "",
        buyerPhone: stock.buyerPhone || "",
      });
    }
  }, [stock]);

  console.log(stockOutDetails.availableQuantity);

  // Fetch product and supplier data on component mount
  useEffect(() => {
    getProductDetails();
    getAllSupplierNames();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStockOutDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered");

    const data = {
      batch_id: stock.batch_id,
      productId: stock.productId,
      supplierName: stock.supplierName,
      availableQuantity:
        stockOutDetails.availableQuantity - stockOutDetails.quantity_out,
      quantity_out: stockOutDetails.quantity_out,
      price: stockOutDetails.price,
      buyerName: stockOutDetails.buyerName,
      buyerPhone: stockOutDetails.buyerPhone,
    };

    console.log("Submitting data:", data);

    try {
      await axios.put(
        `http://localhost:5000/api/stock/updatestockouthistory/${stock._id}`,
        data,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      closeEdit(); // Notify parent to close
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <>
      <Sheet open={true} onOpenChange={closeEdit}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Stock Out</SheetTitle>
            <SheetDescription>
              Enter the details of the stock correctly.
            </SheetDescription>
          </SheetHeader>
          <form className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="productName" className="text-right">
                Product Name
              </Label>
              <Combobox
                className="w-[250px]"
                data={productDetails}
                textField="name"
                disabled
                renderListItem={({ item }) => (
                  <div className="flex items-center border-b-2">
                    <img
                      src={item.productImage ? item.productImage : DefaultImg}
                      className="w-6 h-6 m-3"
                      alt="product"
                    />
                    {" " + item.name}
                  </div>
                )}
                filter="contains"
                value={stock.productName}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="supplierName" className="text-right">
                Supplier Name
              </Label>
              <Combobox
                className="w-[250px]"
                data={supplierName}
                textField="name"
                disabled
                renderListItem={({ item }) => (
                  <div className="flex items-center border-b-2">
                    <img
                      src={item.companylogo}
                      className="w-6 h-6 m-3"
                      alt="supplier"
                    />
                    {" " + item.name}
                  </div>
                )}
                filter="contains"
                defaultValue={stock.supplierName}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity_in" className="text-right">
                Quantity Available
              </Label>
              <Input
                readOnly
                id="availableQuantity"
                name="availableQuantity"
                value={stockOutDetails.availableQuantity}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity_in" className="text-right">
                Quantity Out
              </Label>
              <Input
                id="quantity_out"
                name="quantity_out"
                onChange={handleChange}
                value={stockOutDetails.quantity_out}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                onChange={handleChange}
                value={stockOutDetails.price}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Buyer Name
              </Label>
              <Input
                id="buyerName"
                name="buyerName"
                onChange={handleChange}
                value={stockOutDetails.buyerName}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Buyer Phone
              </Label>
              <Input
                id="buyerPhone"
                name="buyerPhone"
                onChange={handleChange}
                value={stockOutDetails.buyerPhone}
                className="col-span-3"
              />
            </div>
            {errorMsg && (
              <div className="text-red-500 text-center mt-2">{errorMsg}</div>
            )}
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" onClick={handleSubmit}>
                  Save changes
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default EditStockOut;
