import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AddProduct from "./AddProduct";
import ProductDetails from "./ProductDetails";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import DefaultImg from "../../assets/default_shoes.png";
import AddStockOut from "./AddStockOut";
import StockOutDetails from "./StockOutDetails";

function StockOut() {
  const [stockOut, setStockOut] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const closeModal = () => setShowModal(false);

  const getallstockout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/stock/getallstockout",
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );

      const groupedStockOut = response.data.reduce((acc, item) => {
        const existingProduct = acc.find(
          (product) => product.productName === item.productName
        );
        if (existingProduct) {
          existingProduct.quantity_out += item.quantity_out;
        } else {
          acc.push({ ...item });
        }
        return acc;
      }, []);

      setStockOut(groupedStockOut);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getallstockout();
  }, [showEdit, showDelete]);

  const handleRowClick = (stockIn) => {
    setSelectedProduct(stockIn);
    setShowDetails(true);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setShowEdit(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowDelete(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  const closeEdit = () => {
    setShowEdit(false);
  };

  const closeDelete = () => {
    setShowDelete(false);
  };

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),

      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "productImage",
      header: " Product Image",
      cell: ({ row }) => (
        <img
          src={
            row.getValue("productImage") == null
              ? DefaultImg
              : row.getValue("productImage")
          }
          alt="Company Logo"
          className="h-10 w-10 object-cover"
        />
      ),
    },

    {
      accessorKey: "productName",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize ml-4">{row.getValue("productName")}</div>
      ),
    },
    {
      accessorKey: "quantity_out",
      header: "Quantity Out",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("quantity_out")}</div>
      ),
    },
  ];

  const table = useReactTable({
    data: stockOut,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className=" flex flex-col space-y-4 ">
      <div className=" bg-white h-screen m-4 p-4 rounded-md">
        {showDetails && selectedProduct ? (
          <StockOutDetails
            stockOut={selectedProduct}
            closeDetails={() => setSelectedProduct(null)}
          />
        ) : (
          <>
            <div className="flex items-center py-4">
              <Input
                placeholder="Filter product..."
                value={table.getColumn("productName")?.getFilterValue() ?? ""}
                onChange={(event) =>
                  table
                    .getColumn("productName")
                    ?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <AddStockOut
                  closeModal={closeModal}
                  updateData={getallstockout}
                />
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                        onClick={() => handleRowClick(row.original)}
                        className="cursor-pointer"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        )}

        {showEdit && (
          <EditProduct
            showEdit={showEdit}
            product={selectedProduct}
            closeEdit={closeEdit}
          />
        )}
        {showDelete && (
          <DeleteStockIn
            showDelete={showDelete}
            stock={selectedProduct}
            closeDelete={closeDelete}
          />
        )}
      </div>
    </div>
  );
}

export default StockOut;
