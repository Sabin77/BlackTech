import React from "react";
import { useState, useEffect, useRef } from "react";
import "../../App.css";
import axios from "axios";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DefaultImg from "../../assets/default_shoes.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function AddStockIn({ closeModal, updateData }) {
  const [productDetails, setProductDetails] = useState([]);
  const [supplierName, setSupplierName] = useState([]);
  const [stockInDetails, setStockInDetails] = useState({
    batch_id: "",
    productId: "",
    productName: "",
    productImage: "",
    supplier: "",
    quantity_in: "",
    price: "",
  });

  const [errorMsg, setErrorMsg] = useState();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const getProductDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/getallnames"
      );
      const products = Array.isArray(response.data) ? response.data : [];
      setProductDetails(products);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getallnames = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/supplier/getallnames"
      );
      setSupplierName(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProductDetails();
    getallnames();
  }, [closeModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStockInDetails({ ...stockInDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      batch_id: stockInDetails.batch_id,
      productId: stockInDetails.productId,
      productName: stockInDetails.productName,
      productImage: stockInDetails.productImage,
      supplier: stockInDetails.supplier,
      quantity_in: stockInDetails.quantity_in,
      price: stockInDetails.price,
    };
    // console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/stock/addstock",
        data,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      setStockInDetails({
        batch_id: "",
        productId: "",
        productName: "",
        productImage: "",
        supplier: "",
        quantity_in: "",
        price: "",
      });
      setIsSheetOpen(false);
      updateData();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <>
      <Button
        variant="outline"
        className="my-4 mx-2 bg-[#63aa86] text-white"
        onClick={() => setIsSheetOpen(true)}
      >
        Add a Stock
      </Button>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        {/* <SheetTrigger asChild></SheetTrigger> */}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add a StockIn</SheetTitle>
            <SheetDescription>
              Enter the details of the stock correctly.
            </SheetDescription>
          </SheetHeader>
          <form className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Batch Id
              </Label>
              <Input
                id="batch_id"
                name="batch_id"
                onChange={handleChange}
                value={stockInDetails.batch_id}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="supplierName" className="text-right">
                Product Name
              </Label>
              <Combobox
                className="w-[250px]"
                data={Array.isArray(productDetails) ? productDetails : []}
                textField="name"
                renderListItem={({ item }) => (
                  <div className=" flex items-center border-b-2">
                    <img
                      src={item.productImage ? item.productImage : DefaultImg}
                      className=" w-6 h-6 m-3"
                    />
                    {" " + item.name}
                  </div>
                )}
                filter="contains"
                onChange={(value) =>
                  setStockInDetails({
                    ...stockInDetails,
                    productId: value._id,
                    productName: value.name,
                    productImage: value.productImage,
                  })
                }
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="supplierName" className="text-right">
                Supplier Name
              </Label>
              <Combobox
                className="w-[250px]"
                data={Array.isArray(supplierName) ? supplierName : []}
                textField="name"
                renderListItem={({ item }) => (
                  <div className=" flex items-center border-b-2">
                    <img src={item.companylogo} className=" w-6 h-6 m-3" />
                    {" " + item.name}
                  </div>
                )}
                filter="contains"
                onChange={(value) =>
                  setStockInDetails({ ...stockInDetails, supplier: value._id })
                }
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
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
              <Label htmlFor="productImage" className="text-right">
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
          </form>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={handleSubmit}>
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default AddStockIn;
