import React, { useEffect, useRef, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
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

  const debounced = useDebounce(searchValue, 500);
  const query = useQuery();
  const page = query.get("page");
  const [currentPage, setCurrentPage] = useState(page ? page : 1);
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
      setSearchValue(searchValue);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const fetchData = async () => {
    await axiosClient
      .get(`/admin/products?page=${currentPage}&limit=${currentLimit}`)
      .then(({ data }) => {
        setProducts(data.data);
        setTotalPages(data.pagination.totalPages);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);
  useEffect(() => {
    if (!debounced.trim()) {
      fetchData();
    } else {
      const fetchApi = async () => {
        setLoading(true);
        await axiosClient
          .get(`/product/search/${debounced}`)
          .then(({ data }) => {
            setProducts(data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchApi();
    }
  }, [debounced]);
  const convertStringDate = (stringTime) => {
    var date = new Date(stringTime);
    var nam = date.getFullYear();
    var thang = date.getMonth() + 1;
    var ngay = date.getDate();
    var gio = date.getHours();
    var phut = date.getMinutes();
    var giay = date.getSeconds();
    const chuoiNgayThangNam = (ngay < 10 ? "0" : "") + ngay + "/" + (thang < 10 ? "0" : "") + thang + "/" + nam;
    return {
      date: chuoiNgayThangNam,
      time: gio + "h" + phut + "m" + giay + "s",
    };
  };
  const deleteProduct = (slug) => {
    // confirm(slug);
  };

  const selectedProduct = (slug) => {
    if (selectedProducts.includes(slug)) {
      const fillteredArr = selectedProducts.filter((productSlug) => productSlug !== slug);
      setSelectedProducts([...fillteredArr]);
    } else {
      setSelectedProducts([...selectedProducts, slug]);
    }
  };
  const selectedAllProducts = () => {
    const slugArr = products.map((product) => product?.slug);
    if (selectedProducts.length > 0) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts([...slugArr]);
    }
  };
  const deleteSelectedproduct = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-10 pb-0 h-full">
      <div className="bg-white p-4 flex flex-col items-end">
        <Button className={"bg-orange  m-1 hover:bg-orange/90 py-4"} asChild>
          <Link to={"/admin/newproduct"}>
            <div className="text-3xl font-bold">+</div>
            <BiDish className="text-3xl font-bold" />
          </Link>
        </Button>
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
              {products.map((product, index) => (
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
              {pages.map((item, index) => {
                if (currentPage > 1) {
                  if (index - 1 + currentPage > totalPages || index > 2) {
                    return null;
                  } else {
                    return (
                      <PaginationItem key={index}>
                        <PaginationLink className={index === 1 ? "text-orange font-bold" : "text-black font-bold"}>{index - 1 + currentPage}</PaginationLink>
                      </PaginationItem>
                    );
                  }
                } else if (currentPage === totalPages) {
                  if (index - 2 + currentPage > totalPages || index > 2) {
                    return null;
                  } else {
                    return (
                      <PaginationItem key={index}>
                        <PaginationLink className={index === 2 ? "text-orange font-bold" : "text-black font-bold"}>{index - 2 + currentPage}</PaginationLink>
                      </PaginationItem>
                    );
                  }
                } else {
                  if (index + currentPage > totalPages || index > 2) {
                    return null;
                  } else {
                    return (
                      <PaginationItem key={index}>
                        <PaginationLink className={index === 0 ? "text-orange font-bold" : "text-black font-bold"}>{index + currentPage}</PaginationLink>
                      </PaginationItem>
                    );
                  }
                }
              })}

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
