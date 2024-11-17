import React from 'react'
import { useLocation,useNavigate, useLoaderData } from 'react-router-dom'

const PaginationContainer = () => {
  const {meta} = useLoaderData()
  const {pageCount, page} = meta.pagination
  

  const pages = Array.from({length:pageCount},(_,index)=>{
    return index + 1
  })

  const {search, pathname} = useLocation()
  const navigate = useNavigate()
  const handlePageChange = (pageNumber)=>{
    const searchParams = new URLSearchParams(search)
    searchParams.set("page", pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  if(pageCount < 2)return null


  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button className='btn btn-xd sm:btn-md join-item' onClick={()=>{ 
          let prevPage = page - 1
          if(prevPage < 1)return prevPage = pageCount 
          handlePageChange(prevPage)}}>Prev</button>
        {pages.map((pageNo)=>{
          return(
            <button key={pageNo} onClick= {()=>handlePageChange(pageNo)
            } className={`btn btn-xs sm:btn-md border-none join-item ${pageNo=== page ? "bg-base-300 border-base-300":""}`}>{pageNo}</button>
          )
        })}
        <button className='btn btn-xd sm:btn-md join-item' onClick={()=>{ let nextPage = page + 1 
           if(nextPage > pageCount)return nextPage = 1 
                  handlePageChange(nextPage)}}>Next</button>
      </div>
    </div>
  )
}

export default PaginationContainer