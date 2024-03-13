import React from "react"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"

const PaginationContainer = () => {
  const { meta } = useLoaderData()
  // console.log(meta)
  const { pageCount, page } = meta.pagination
  const { pathname, search } = useLocation()
  // console.log(pathname, search)
  const navigate = useNavigate()

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1
  })

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set("page", pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  if (pageCount < 2) return null

  return (
    <div className="mt-16 flex justify-end ">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1
            if (prevPage < 1) prevPage = pageCount
            handlePageChange(prevPage)
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              className={`btn btn-xs sm:btn-md join-item ${
                page === pageNumber ? "bg-base-300 border-base-300" : ""
              }`}
              onClick={() => {
                handlePageChange(pageNumber)
              }}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          )
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1
            if (nextPage > 3) nextPage = 1
            handlePageChange(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationContainer
