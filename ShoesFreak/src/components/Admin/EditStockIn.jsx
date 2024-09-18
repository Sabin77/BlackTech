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

function EditStockIn({ stock, closeEdit }) {
  console.log("Received stock:", stock);

  const [productDetails, setProductDetails] = useState([]);
  const [supplierName, setSupplierName] = useState([]);
  const [stockInDetails, setStockInDetails] = useState({
    supplierName: "",
    quantity_in: "",
    price: "",
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
      setStockInDetails({
        supplierName: stock.supplierName || "",
        quantity_in: stock.quantity_in || "",
        price: stock.price || "",
      });
    }
  }, [stock]);

  // Fetch product and supplier data on component mount
  useEffect(() => {
    getProductDetails();
    getAllSupplierNames();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStockInDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered");

    const data = {
      supplierName: stockInDetails.supplierName,
      quantity_in: stockInDetails.quantity_in,
      price: stockInDetails.price,
    };

    console.log("Submitting data:", data);

    try {
      await axios.put(
        `http://localhost:5000/api/stock/updatestockinhistory/${stock._id}`,
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
            <SheetTitle>Edit Stock In</SheetTitle>
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
                onChange={(value) =>
                  setStockInDetails({
                    ...stockInDetails,
                    supplierId: value._id,
                    supplierName: value.name,
                  })
                }
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity_in" className="text-right">
                Quantity In
              </Label>
              <Input
                id="quantity_in"
                name="quantity_in"
                onChange={handleChange}
                value={stockInDetails.quantity_in}
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
                value={stockInDetails.price}
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

export default EditStockIn;
