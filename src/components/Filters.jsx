import React from "react"
import FormInput from "./FormInput"
import { Form, useLoaderData, Link } from "react-router-dom"
import FormSelect from "./FormSelect"
import FormRange from "./FormRange"
import FormCheckbox from "./FormCheckbox"

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, order, shipping, price } = params
  // console.log(meta)
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        list={meta.categories}
        label="select category"
        name="category"
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        list={meta.companies}
        label="select company"
        name="company"
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        list={["a-z", "z-a", "high", "low"]}
        label="sort by"
        name="order"
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  )
}

export default Filters
