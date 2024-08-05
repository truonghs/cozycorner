import React, { useEffect, useRef, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { BiDish } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import axiosClient from "@/configs/axios";
import { useDebounce } from "@/hooks";
import { IoMdMore } from "react-icons/io";
function Products() {
  const [currentLimit, setCurrentLimit] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    prevPage: null,
    nextPage: 2,
    totalPages: 2,
  });
  const debounced = useDebounce(searchValue, 500);
  const pages = Array.from({ length: 3 }, (_, index) => index + 1);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const inputRef = useRef();
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);

    inputRef.current.focus();
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setPagination({ ...pagination, currentPage: 1 });
      setSearchValue(searchValue);
    }
  };
  const handlePageChange = (value) => {
    if (value) {
      setPagination({ ...pagination, currentPage: value });
    }
  };
  const handlePrevious = () => {
    if (pagination.currentPage > 1) {
      let tmp = pagination.currentPage;
      setPagination({ ...pagination, currentPage: tmp - 1 });
    }
  };
  const handleNext = () => {
    if (pagination.currentPage < pagination.totalPages) {
      console.log(pagination.currentPage);
      let tmp = pagination.currentPage;
      setPagination({ ...pagination, currentPage: tmp + 1 });
    }
  };
  const fetchData = async () => {
    if (!debounced.trim()) {
      await axiosClient
        .get(`/admin/products?page=${pagination.currentPage}&limit=${currentLimit}&keyword=${debounced}`)
        .then(({ data }) => {
          setProducts(data.data);
          setPagination({ ...data.pagination });
        })
        .catch((error) => console.log(error));
    } else {
      const fetchApi = async () => {
        setLoading(true);
        await axiosClient
          .get(`/admin/products?page=${pagination.currentPage}&limit=${currentLimit}&keyword=${debounced}`)
          .then(({ data }) => {
            setProducts(data.data);
            setPagination({ ...data.pagination });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchApi();
    }
  };
  useEffect(() => {
    fetchData();
  }, [pagination.currentPage, debounced]);

  return (
    <div className="p-10 pb-0 h-full">
      <div className="bg-white p-4 flex flex-col items-center">
        <div className="flex items-center w-full justify-between">
          <div className="w-fit  h-12 bg-white rounded-full flex items-center justify-between border-solid border-[1px] border-gray/50 overflow-hidden duration-300 hover:shadow-lg">
            <input onChange={(e) => handleChange(e)} className="outline-none ml-4 w-fit min-w-96 rounded-full text-lg" placeholder="Search here..." />
            <div className="px-4 text-xl text-off-white hover:text-orange hover:cursor-pointer">
              <FaMagnifyingGlass />
            </div>
          </div>
          <Button className={"bg-orange  m-1 hover:bg-orange/90 py-4"} asChild>
            <Link to={"/admin/newproduct"}>
              <div className="text-3xl font-bold">+</div>
              <BiDish className="text-3xl font-bold" />
            </Link>
          </Button>
        </div>

        <div className="rounded-md border w-full mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium text-left">Id</TableHead>
                <TableHead className="font-medium text-left">Name</TableHead>
                <TableHead className="font-medium text-left">Create Date</TableHead>
                <TableHead className="font-medium text-center">Price</TableHead>
                <TableHead className="font-medium text-center">Sold</TableHead>
                <TableHead className="font-medium text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-left">{product?._id}</TableCell>
                  <TableCell className="font-medium text-left">{product?.name}</TableCell>
                  <TableCell className="font-medium text-left">{product.createdAt}</TableCell>
                  <TableCell className="font-medium text-center">{product?.size_prices[0].price}$</TableCell>
                  <TableCell className="font-medium text-center">{product?.sold}</TableCell>
                  <TableCell className="font-medium flex items-center justify-center">
                    <IoMdMore className="text-lg hover:cursor-pointer" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-6">
          <Pagination className={"select-none"}>
            <PaginationContent>
              <PaginationItem onClick={() => handlePrevious()}>
                <PaginationPrevious className={"bg-orange/20 text-orange hover:bg-orange hover:text-white duration-200"} />
              </PaginationItem>
              {pagination.prevPage ? (
                <PaginationItem onClick={() => handlePageChange(pagination.prevPage)}>
                  <PaginationLink className={"hover:bg-orange hover:text-white duration-200"}>{pagination.prevPage}</PaginationLink>
                </PaginationItem>
              ) : null}
              {pagination.currentPage ? (
                <PaginationItem>
                  <PaginationLink className={"bg-orange text-white duration-200"}>{pagination.currentPage}</PaginationLink>
                </PaginationItem>
              ) : null}
              {pagination.nextPage ? (
                <PaginationItem onClick={() => handlePageChange(pagination.nextPage)}>
                  <PaginationLink className={"hover:bg-orange hover:text-white duration-200"}>{pagination.nextPage}</PaginationLink>
                </PaginationItem>
              ) : null}
              <PaginationItem onClick={() => handleNext()}>
                <PaginationNext className={"bg-orange/20 text-orange hover:bg-orange hover:text-white duration-200"} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default Products;
