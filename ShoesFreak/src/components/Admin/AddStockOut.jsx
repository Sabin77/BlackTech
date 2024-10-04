import React, { useState, useEffect } from "react";
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
import Combobox from "react-widgets/Combobox";
import axios from "axios";

function AddStockOut({ closeModal, updateData }) {
  const [products, setProducts] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    supplierName: "",
    supplierId: "",
    availableQuantity: 0,
    stockInPrice: 0,
    quantity_out: 0,
    price: 0,
    buyerName: "",
    buyerPhone: "",
  });

  const getallstockins = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/stock/getallstockin"
      );
      const groupedStockIn = response.data.reduce((acc, item) => {
        const existingProduct = acc.find(
          (product) => product.productName === item.productName
        );
        if (existingProduct) {
          existingProduct.quantity_in += item.quantity_in;
        } else {
          acc.push({ ...item });
        }
        return acc;
      }, []);

      setProducts(groupedStockIn);
      console.log(groupedStockIn);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getallstockins();
  }, []);

  useEffect(() => {
    if (isSheetOpen) {
      // Reset form and selected product/batch when opening the dialog
      setFormData({
        supplierName: "",
        supplierId: "",
        availableQuantity: 0,
        stockInPrice: 0,
        quantity_out: 0,
        price: 0,
        buyerName: "",
        buyerPhone: "",
      });
      setSelectedProduct(null); // Reset the selected product
      setSelectedBatch(null); // Reset the selected batch
      setBatches([]); // Clear the batches combobox
    }
  }, [isSheetOpen]);

  // Fetch batch options when a product is selected
  const handleProductChange = async (product) => {
    setSelectedProduct(product);
    try {
      if (!product) return; // Check if a valid product is selected;
      const response = await axios.get(
        `http://localhost:5000/api/stock/getstockinhistory/${product.productId}`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      setBatches(response.data);
      console.log(response.data);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  // Set fields when a batch is selected
  const handleBatchChange = (batch) => {
    setSelectedBatch(batch);
    setFormData({
      ...formData,
      supplierName: batch.supplierName,
      supplierId: batch.supplierId,
      availableQuantity: batch.availableQuantity,
      stockInPrice: batch.price,
    });
  };

  // Handle input change for user-provided fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    if (formData.quantity_out > formData.availableQuantity) {
      setErrorMsg(" Stock Out quantity should not exceed available quantity");
    }

    const stockOutData = {
      productName: selectedProduct.productName,
      productId: selectedProduct.productId,
      productImage: selectedProduct.productImage,
      batch_id: selectedBatch.batch_id,
      supplierName: formData.supplierName,
      supplierId: formData.supplierId,
      quantity_out: formData.quantity_out,
      price: formData.price,
      buyerName: formData.buyerName,
      buyerPhone: formData.buyerPhone,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/stock/addstockout",
        stockOutData,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      console.log("Form submitted successfully:");
      setFormData({
        supplierName: "",
        supplierId: "",
        availableQuantity: 0,
        stockInPrice: 0,
        quantity_out: 0,
        price: 0,
        buyerName: "",
        buyerPhone: "",
      });
      setIsSheetOpen(false);
      updateData();
      closeModal();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Dialog open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="my-4 mx-2 bg-[#63aa86] text-white"
          onClick={() => setIsSheetOpen(true)}
        >
          Add StockOut
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Add StockOut</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className=" flex flex-col">
          {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>}
          <div className=" flex justify-between gap-4 my-6 ">
            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="name" className=" pl-2 text-left">
                Product Name
              </Label>
              <Combobox
                className=""
                data={products}
                textField="productName"
                value={selectedProduct}
                onChange={handleProductChange}
                renderListItem={({ item }) => (
                  <div className=" flex items-center border-b-2">
                    <img src={item.productImage} className=" w-6 h-6 m-3" />
                    {" " + item.productName}
                  </div>
                )}
                filter="contains"
              />
            </div>

            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="batch" className=" pl-2 text-left">
                Batch Id
              </Label>
              <Combobox
                className=""
                data={batches}
                textField="batch_id"
                value={selectedBatch}
                onChange={handleBatchChange}
                filter="contains"
              />
            </div>

            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="supplierName" className=" pl-2 text-left">
                Supplier Name
              </Label>
              <Input readOnly id="supplierName" value={formData.supplierName} />
            </div>
          </div>

          <div className=" flex justify-between gap-4 my-6 ">
            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="availableQuantity" className=" pl-2 text-left">
                Available Quantity
              </Label>
              <Input
                id="availableQuantity"
                value={formData.availableQuantity}
                readOnly
              />
            </div>

            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="name" className=" pl-2 text-left">
                Stock-In price
              </Label>
              <Input id="stockInPrice" value={formData.stockInPrice} readOnly />
            </div>

            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="name" className=" pl-2 text-left">
                Stock-Out quantity
              </Label>
              <Input
                id="quantity_out"
                value={formData.quantity_out}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className=" flex space-x-6 gap-4 my-6 ">
            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="name" className=" pl-2 text-left">
                Stock-Out Price
              </Label>
              <Input
                id="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>

            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="name" className=" pl-2 text-left">
                Buyer Name
              </Label>
              <Input
                id="buyerName"
                value={formData.buyerName}
                onChange={handleInputChange}
              />
            </div>

            <div className=" flex flex-col  gap-2 ">
              <Label htmlFor="name" className=" pl-2 text-left">
                Buyer Phone
              </Label>
              <Input
                id="buyerPhone"
                value={formData.buyerPhone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddStockOut;
