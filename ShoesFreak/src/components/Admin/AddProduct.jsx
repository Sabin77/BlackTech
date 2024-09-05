import React from "react";
import { useState, useEffect, useRef } from "react";
import "../../App.css";
import axios from "axios";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
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
  SheetTrigger,
} from "@/components/ui/sheet";

function AddProduct({ closeModal, updateData }) {
  const [supplierName, setSupplierName] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    quantity_limit: "",
    color: "",
    supplier: "",
  });

  const [image, setImage] = useState(null);

  const [errorMsg, setErrorMsg] = useState();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const getallnames = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/supplier/getallnames"
      );
      setSupplierName(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getallnames();
  }, [closeModal]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma-separated color string to an array
    const colorsArray = productDetails.color
      .split(",")
      .map((color) => color.trim());

    const data = new FormData();
    data.append("name", productDetails.name);
    data.append("description", productDetails.description);
    data.append("quantity_limit", productDetails.quantity_limit);
    data.append("color", JSON.stringify(colorsArray));
    data.append("supplier", productDetails.supplier);
    data.append("productImage", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/addproduct",
        data,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      setProductDetails({
        name: "",
        description: "",
        quantity_limit: "",
        color: "",
        supplier: "",
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
        Add a Product
      </Button>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        {/* <SheetTrigger asChild></SheetTrigger> */}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add a Product</SheetTitle>
            <SheetDescription>
              Enter the details of the product correctly.
            </SheetDescription>
          </SheetHeader>
          <form className="grid gap-4 py-4">
            <div className="flex flex-col  gap-3">
              <Label htmlFor="name" className="pl-2 text-[15px]">
                Product Name
              </Label>
              <Input
                id="name"
                name="name"
                onChange={handleChange}
                value={productDetails.name}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-3">
              <Label htmlFor="email" className="pl-2 text-[15px]">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                onChange={handleChange}
                value={productDetails.description}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-3">
              <Label htmlFor="phone" className="pl-2 text-[15px]">
                Color
              </Label>
              <Input
                id="color"
                name="color"
                onChange={handleChange}
                value={productDetails.color}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-3">
              <Label htmlFor="phone" className="pl-2 text-[15px]">
                Quantity Limit
              </Label>
              <Input
                id="quantity_limit"
                name="quantity_limit"
                onChange={handleChange}
                value={productDetails.quantity_limit}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-3">
              <Label htmlFor="productImage" className="pl-2 text-[15px]">
                Product Image
              </Label>
              <Input
                id="image"
                name="image"
                type="file"
                onChange={handleFileChange}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-3">
              <Label htmlFor="supplierName" className="pl-2 text-[15px]">
                Supplier Name
              </Label>
              <Combobox
                className="w-[300px]"
                data={supplierName}
                textField="name"
                renderListItem={({ item }) => (
                  <div className=" flex items-center border-b-2">
                    <img src={item.companylogo} className=" w-6 h-6 m-3" />
                    {" " + item.name}
                  </div>
                )}
                filter="contains"
                onChange={(value) =>
                  setProductDetails({ ...productDetails, supplier: value._id })
                }
              />
            </div>
          </form>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={handleSubmit} className=" mt-3">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default AddProduct;
