import React from 'react'
import { render } from 'react-dom'
import { useLocation,useNavigate, useLoaderData } from 'react-router-dom'

const ComplexPagination = () => {
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

  const addPageButton = ({pageNo, activeClass})=>{
    return (
      <button key={pageNo} onClick= {()=>handlePageChange(pageNo)} className={`btn btn-xs sm:btn-md border-none join-item ${activeClass ?"bg-base-300 border-base-300":""}`}>{pageNo}</button>)}

  const renderPageButtons = () =>{
    const pageButtons = []
    // first button
    pageButtons.push(addPageButton({pageNo:1, activeClass:page === 1}))
    //  dots
    if(page > 2){
       pageButtons.push(<button className='join-item btn  btn-xs sm:btn-md' key="dot-1">...</button>)
    }
   

    // active page
    if(page !== 1 && page !== pageCount ){
      pageButtons.push(addPageButton({pageNo:page , activeClass:page === true}))
    }

    //  dots
    if(page < pageCount - 1){
      pageButtons.push(<button className='join-item btn  btn-xs sm:btn-md' key="dot-1">...</button>)
    
    }
    
    // last button
    pageButtons.push(addPageButton({pageNo:pageCount, activeClass:page === pageCount}))
    return pageButtons
  }

  if(pageCount < 2)return null


  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button className='btn btn-xd sm:btn-md join-item' onClick={()=>{ 
          let prevPage = page - 1
          if(prevPage < 1)return prevPage = pageCount 
          handlePageChange(prevPage)}}>Prev</button>
        {renderPageButtons()}
        <button className='btn btn-xd sm:btn-md join-item' onClick={()=>{ let nextPage = page + 1 
           if(nextPage > pageCount)return nextPage = 1 
                  handlePageChange(nextPage)}}>Next</button>
      </div>
    </div>
  )
}

export default ComplexPagination