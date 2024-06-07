import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CashOnDelivery() {
  const [phone, setPhone] = useState("");
  const maxLength = 10;

  const handlePhoneChange = (e) => {
    const newValue = e.target.value;

    // Ensure the new value is a number and within the max length
    if (/^\d*$/.test(newValue) && newValue.length <= maxLength) {
      setPhone(newValue);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Cash On Delivery</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Your Details</DialogTitle>
            <DialogDescription>
              Please enter your correct details.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Phone</Label>
              <input
                required
                id="phone"
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                maxLength="10"
                inputMode="numeric"
                className="col-span-3 h-10 border-2 outline-none rounded-md"
                pattern="\d*"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <input
                requireds
                id="address"
                defaultValue=""
                className="col-span-3 h-10 border-2 outline-none rounded-md"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="total_quantity" className="text-right">
                Total Quantity
              </Label>
              <input
                readOnly
                id="total_quantity"
                defaultValue="6"
                className="col-span-3 outline-none"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="total_price" className="text-right">
                Total Price
              </Label>
              <input
                readOnly
                id="total_price"
                defaultValue="99999"
                className="col-span-3 outline-none"
              />
            </div>
            <div className=" flex justify-center ">
              <button className="  px-3 py-1 rounded-md bg-[#5FBF8F] hover:bg-[#458D69] ">
                Submit
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CashOnDelivery;
