import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import axiosClient from "@/configs/axios";
import { useNavigate } from "react-router-dom";
function NewProduct() {
  const navigate = useNavigate();
  const product = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    category: z.string().min(1, {
      message: "Category is required.",
    }),
    subCategory: z.array(z.string()).nonempty({
      message: "Sub Category is required.",
    }),
    description: z.string().min(1, {
      message: "Description is required.",
    }),
    preparation: z.string().min(1, {
      message: "Description is required.",
    }),
    images: z.instanceof(FileList).optional(),
    size_prices: z
      .array(
        z.object({
          size: z.string().min(1, "Size is required."),
          price: z.number().positive("Price must be a positive number."),
        })
      )
      .nonempty({
        message: "Size & Price is required.",
      }),
  });

  const form = useForm({
    resolver: zodResolver(product),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      preparation: "",
      images: null,
      size_prices: [],
      discount: 0,
      subCategory: [],
    },
  });
  const categories = ["Appetizers", "Main Courses", "Sides", "Desserts", "Beverages", "Seasonal Specials"];
  const subCategories = ["Vegetarian", "Chicken", "Pork", "Beef", "Seafood", "Lamb", "Crab", "Shrimp", "Mushroom", "Gluten Friendly", "Assorted", "Sandwich", "Spring Rolls", "Order"];
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  const [size_price, setSize_price] = useState({ size: "", price: "" });
  const [size_prices, setSize_prices] = useState([]);

  const handleFileChange = (event) => {
    form.setValue("images", event.target.files);
  };
  const handleSizeChange = (value) => {
    setSize_price({ ...size_price, size: value });
  };
  const handlePriceChange = (value) => {
    setSize_price({ ...size_price, price: value });
  };
  const handleSubmitSize = () => {
    if (size_price.size && size_price.price) {
      const exists = size_prices.some((item) => item.size === size_price.size);

      if (!exists) {
        const newSizePrices = [...size_prices, size_price];
        setSize_prices(newSizePrices);
        form.setValue("size_prices", newSizePrices);
        setSize_price({ size: "", price: "" });
      } else {
        alert("This size already exists. Please enter a unique size.");
      }
    }
  };

  const handleDeleteSize = (index) => {
    let currentSize_price = [...size_prices];
    currentSize_price.splice(index, 1);
    setSize_prices(currentSize_price);
    form.setValue("size_prices", currentSize_price);
  };
  const handleSelectSubCategory = (value) => {
    const index = selectedSubCategory.indexOf(value);
    console.log(value);
    if (index !== -1) {
      let tmp = [...selectedSubCategory];
      tmp.splice(index, 1);
      setSelectedSubCategory(tmp);
      form.setValue("subCategory", tmp);
    } else {
      let tmp = [...selectedSubCategory];
      tmp.push(value);
      setSelectedSubCategory(tmp);
      form.setValue("subCategory", tmp);
    }
  };
  const handleDeleteSelectedSubCategory = (index) => {
    let tmp = [...selectedSubCategory];
    tmp.splice(index, 1);
    setSelectedSubCategory(tmp);
    form.setValue("subCategory", tmp);
  };
  const onSubmit = (values) => {
    const formData = new FormData();

    for (let key in values) {
      if (key === "images" && values[key]) {
        Array.from(values[key]).forEach((file, index) => {
          formData.append("images", file); // Đảm bảo trường là 'images'
        });
      } else if (key === "size_prices") {
        values[key].forEach((item, index) => {
          formData.append(`size_prices[${index}][size]`, item.size);
          formData.append(`size_prices[${index}][price]`, item.price);
        });
      } else if (key === "subCategory") {
        values[key].forEach((item, index) => {
          formData.append(`subCategory`, item);
        });
      } else {
        formData.append(key, values[key]);
      }
    }

    axiosClient
      .post("admin/product/store", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        navigate(0);
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  };

  return (
    <div className="p-10 pb-0 text-lg">
      <div className="w-[50vw]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex items-start gap-10">
              <FormField
                className={"flex-1"}
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className={"w-full"}>
                    <FormLabel className={"font-bold text-orange-dark text-xl"}>Name</FormLabel>
                    <FormControl>
                      <Input className={"text-lg w-full"} placeholder="Name..." {...field} />
                    </FormControl>
                    <FormDescription className={"text-base"}>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-2 ">
                <FormLabel className={"font-bold text-orange-dark text-xl"}>Size & Price</FormLabel>
                <div className="flex items-center gap-2">
                  <Input className={"text-lg w-full"} type="text" placeholder="Size" onChange={(e) => handleSizeChange(e.target.value)} value={size_price?.size} />
                  <div>-</div>
                  <Input onChange={(e) => handlePriceChange(parseFloat(e.target.value))} className={"text-lg w-full"} type="number" step="0.01" min="0" placeholder="Price" value={size_price?.price} />
                  $
                  <div onClick={() => handleSubmitSize()} className="p-2 bg-green rounded-full hover:cursor-pointer hover:shadow-lg hover:opacity-90">
                    <FaCheck className="text-white font-bold text-sm" />
                  </div>
                </div>
                <FormDescription className={"text-base"}>Enter the size of the product.</FormDescription>
              </div>
            </div>
            <FormField
              className={"flex-1"}
              control={form.control}
              name="size_prices"
              render={({ field }) => (
                <FormItem className={"w-full"}>
                  <FormLabel className={"font-bold text-orange-dark text-xl"}>Size & Price List</FormLabel>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-wrap items-center bg-white p-2 min-h-10 w-full rounded-md border border-input gap-2">
                      {size_prices.map((item, index) => (
                        <div key={index} className="flex items-center gap-1 px-3 py-1 rounded-full bg-bg-admin border border-input">
                          <div className="text-md">{item.size}:</div>
                          <div className="text-md"> {item.price}$</div>
                          <FaXmark onClick={() => handleDeleteSize(index)} className="text-sm hover:cursor-pointer hover:text-red" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-start gap-10">
              <FormField
                className={"flex-1"}
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className={"w-full"}>
                    <FormLabel className={"font-bold text-orange-dark text-xl"}>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-lg w-full bg-white">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category, index) => (
                          <SelectItem key={index} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                className={"flex-1"}
                control={form.control}
                name="subCategory"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className={"font-bold text-orange-dark text-xl"}>Sub Category</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" role="combobox" className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}>
                            Select subCategory
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search framework..." className="h-9" />
                          <CommandList>
                            {subCategories.length === 0 ? <div>No sub category found.</div> : null}
                            <CommandGroup>
                              {subCategories.map((subCategory) => (
                                <div
                                  className={
                                    (field.value.includes(subCategory) ? " text-black  " : "text-gray ") +
                                    "hover:text-black hover:cursor-pointer hover:bg-gray-light flex justify-between w-full text-left z-50"
                                  }
                                  key={subCategory}
                                  onClick={() => handleSelectSubCategory(subCategory)}
                                >
                                  {subCategory}
                                  <CheckIcon className={cn("ml-auto h-4 w-4", field.value.includes(subCategory) ? "opacity-100 text-green" : "opacity-0")} />
                                </div>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormItem className={"w-full"}>
              <FormLabel className={"font-bold text-orange-dark text-xl"}>Sub Category List</FormLabel>
              <div className="flex items-center gap-2">
                <div className="flex flex-wrap items-center bg-white p-2 min-h-10 w-full rounded-md border border-input gap-2">
                  {selectedSubCategory.map((item, index) => (
                    <div key={index} className="flex items-center gap-1 px-3 py-1 rounded-full bg-bg-admin border border-input">
                      <div className="text-md">{item}</div>
                      <FaXmark onClick={() => handleDeleteSelectedSubCategory(index)} className="text-sm hover:cursor-pointer hover:text-red" />
                    </div>
                  ))}
                </div>
              </div>
              <FormMessage />
            </FormItem>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"font-bold text-orange-dark text-xl"}>Description</FormLabel>
                  <FormControl>
                    <Textarea className=" text-lg w-full bg-whiteresize-none h-full" placeholder="Tell us a little bit about your product" {...field} rows={4} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preparation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"font-bold text-orange-dark text-xl"}>Preparation</FormLabel>
                  <FormControl>
                    <Textarea className=" text-lg w-full bg-whiteresize-none h-full" placeholder="Tell us a little bit about your product" {...field} rows={4} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-start gap-10 w-full">
              <FormField
                className={"flex-1"}
                control={form.control}
                name="images"
                render={() => (
                  <FormItem className={"w-full"}>
                    <FormLabel className={"font-bold text-orange-dark text-xl"}>Images</FormLabel>
                    <FormControl>
                      <Input className={"text-lg bg-white"} multiple type="file" accept="image/*" onChange={handleFileChange} />
                    </FormControl>
                    <FormDescription className={"text-base"}>Chose some picture for your product.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                className={"flex-1"}
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem className={"w-full"}>
                    <FormLabel className={"font-bold text-orange-dark text-xl"}>Discount (Optional)</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input className={"text-lg w-full"} type="number" step="1" min="0" placeholder="Enter discount" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                        <span className="font-semibold">%</span>
                      </div>
                    </FormControl>
                    <FormDescription className={"text-base"}>Enter the discount of the product. Like 25%</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default NewProduct;
