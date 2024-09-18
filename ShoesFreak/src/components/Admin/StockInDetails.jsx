import React, { useState, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";
import defaultImg from "../../assets/default_shoes.png";
import SingleStockDetails from "./SingleStockDetails";
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

import { IoIosArrowBack } from "react-icons/io";
import EditStockIn from "./EditStockIn";
import DeleteStockIn from "./DeleteStock";

function StockInDetails({ stockIn, closeDetails }) {
  const [stockInHistory, setStockInHistory] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const getStockInHistory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/stock/getstockinhistory/${stockIn.productId}`, // Adjust the endpoint if needed
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      setStockInHistory(response.data);
      console.log("Stock history retrieved successfully");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    if (stockIn?.productId) {
      getStockInHistory();
    }
  }, [stockIn, showEdit, showDelete]);

  const handleDetailsClick = (stockIn) => {
    setSelectedStock(stockIn);
    setShowDetails(true);
  };

  const handleEditClick = (stockIn) => {
    setSelectedStock(stockIn);
    setShowEdit(true);
  };

  const handleDeleteClick = (stockIn) => {
    setSelectedStock(stockIn);
    setShowDelete(true);
  };

  const closeSingleDetails = () => {
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
          className=" relative -left-5"
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
      accessorKey: "batch_id",
      header: " Batch Id",
      cell: ({ row }) => (
        <div className="capitalize text-center ">
          {row.getValue("batch_id")}
        </div>
      ),
    },

    {
      accessorKey: "supplierName",
      header: "Supplier Name",
      cell: ({ row }) => (
        <div className="capitalize text-center">
          {row.getValue("supplierName")}
        </div>
      ),
    },

    {
      accessorKey: "quantity_in",
      header: "Quantity In",
      cell: ({ row }) => (
        <div className="capitalize text-center">
          {row.getValue("quantity_in")}
        </div>
      ),
    },

    {
      accessorKey: "price",
      header: "Unit Price",
      cell: ({ row }) => (
        <div className="capitalize text-center">{row.getValue("price")}</div>
      ),
    },

    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => handleDetailsClick(row.original)}
              >
                View Details
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => handleEditClick(row.original)}>
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => handleDeleteClick(row.original)}
                className=" text-red-500"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: stockInHistory,
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
    <>
      <div className=" flex flex-col space-y-4 ">
        <div className=" bg-white  m-4  rounded-md">
          <div className=" flex items-center -mt-3 mb-3 ">
            <div
              className=" flex  items-center  w-fit text-gray-600 cursor-pointer hover:underline "
              onClick={closeDetails}
            >
              <IoIosArrowBack /> <p className=" text-sm">Back</p>
            </div>
            <div className=" text-center flex-1 text-2xl self-center">
              {" "}
              {stockIn.productName}
            </div>
          </div>

          <div className="flex items-center py-4">
            <Input
              placeholder="Filter supplier..."
              value={table.getColumn("supplierName")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table
                  .getColumn("supplierName")
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

              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize "
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
                        <TableHead key={header.id} className=" text-center ">
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
          {showDetails && (
            <SingleStockDetails
              showDetails={showDetails}
              getstockDetails="getstockindetails"
              stock={selectedStock}
              closeDetails={closeSingleDetails}
            />
          )}

          {showEdit && (
            <EditStockIn
              showEdit={showEdit}
              stock={selectedStock}
              closeEdit={closeEdit}
            />
          )}
          {showDelete && (
            <DeleteStockIn
              showDelete={showDelete}
              delstock="deletestockin"
              stock={selectedStock}
              closeDelete={closeDelete}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default StockInDetails;
