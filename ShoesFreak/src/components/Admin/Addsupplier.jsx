import React, { useEffect } from "react";
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

function Addsupplier({ closeModal, updateData }) {
  const imageRef = useRef(0);

  const [supplierDetails, setSupplierDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    companyname: "",
  });

  const [logo, setLogo] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierDetails({ ...supplierDetails, [name]: value });
  };

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
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlMDY3ZTY2YWQwMmRiMGM0YzRlNWRhIn0sImlhdCI6MTcyNjAyODMzMn0.ti2ZPfeBPBSx1DPYafkulMztxtR5oph9aoPZ3OQ5JH8`,
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
      setIsSheetOpen(false);
      closeModal()
      updateData();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
            <div className="flex flex-col  gap-2">
              <Label htmlFor="name" className="pl-2 text-[15px]">
                Name :
              </Label>
              <Input
                id="name"
                name="name"
                onChange={handleChange}
                value={supplierDetails.name}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-2">
              <Label htmlFor="email" className="pl-2 text-[15px]">
                Email :
              </Label>
              <Input
                id="email"
                name="email"
                onChange={handleChange}
                value={supplierDetails.email}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-2">
              <Label htmlFor="phone" className="pl-2 text-[15px]">
                Phone :
              </Label>
              <Input
                id="phone"
                name="phone"
                onChange={handleChange}
                value={supplierDetails.phone}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-2">
              <Label htmlFor="phone" className="pl-2 text-[15px]">
                Address :
              </Label>
              <Input
                id="address"
                name="address"
                onChange={handleChange}
                value={supplierDetails.address}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-2">
              <Label htmlFor="companyname" className="pl-2 text-[15px]">
                Company :
              </Label>
              <Input
                id="companyname"
                name="companyname"
                onChange={handleChange}
                value={supplierDetails.companyname}
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col  gap-2">
              <Label htmlFor="companylogo" className="pl-2 text-[15px]">
                Company logo
              </Label>
              <Input
                id="logo"
                name="logo"
                type="file"
                onChange={handleFileChange}
                className="w-[300px]"
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
