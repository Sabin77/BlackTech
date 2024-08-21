import React from "react";
import { useState, useRef } from "react";
import "../../App.css";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";
import img from "../../assets/default_shoes.png";
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

function Addsupplier({ closeModal }) {
  const imageRef = useRef(0);
  const [supplierDetails, setSupplierDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    companyname: "",
  });

  const [logo, setLogo] = useState(null);

  const [errorMsg, setErrorMsg] = useState();

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierDetails({ ...supplierDetails, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setLogo(e.target.files[0]);
  // };

  // const handleImageClick = () => {
  //   imageRef.current.click();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", supplierDetails.name);
    data.append("email", supplierDetails.email);
    data.append("address", supplierDetails.address);
    data.append("phone", supplierDetails.phone);
    data.append("companyname", supplierDetails.companyname);
    data.append("companylogo", logo);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/supplier/addsupplier",
        data,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      setSupplierDetails({
        name: "",
        email: "",
        phone: "",
        address: "",
        companyname: "",
      });
      closeModal();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="my-4 mx-2 bg-[#63aa86] text-white"
          >
            Add a Supplier
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create a Supplier</SheetTitle>
            <SheetDescription>
              Enter the details of the suppliers correctly.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                onChange={handleChange}
                value={supplierDetails.name}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                onChange={handleChange}
                value={supplierDetails.email}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                onChange={handleChange}
                value={supplierDetails.phone}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                name="address"
                onChange={handleChange}
                value={supplierDetails.address}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="companyname" className="text-right">
                Company
              </Label>
              <Input
                id="companyname"
                name="companyname"
                onChange={handleChange}
                value={supplierDetails.companyname}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="companylogo" className="text-right">
                Company logo
              </Label>
              <Input
                id="logo"
                name="logo"
                type="file"
                onChange={handleFileChange}
                className="col-span-3"
              />
            </div>
          </div>
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

export default Addsupplier;
