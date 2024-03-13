import React from "react"
import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import { BsFillGridFill, BsList } from "react-icons/bs"

const ProductsContainer = () => {
  const { meta } = useLoaderData()
  // console.log(meta)
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState("grid")

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`
  }
  return (
    <div>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-md text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            className={setActiveStyles("grid")}
            type="button"
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            className={setActiveStyles("list")}
            type="button"
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h4 className="text-2xl mt-16">No matching product found</h4>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>{" "}
    </div>
  )
}

export default ProductsContainer
