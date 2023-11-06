'use client'

import React from 'react'

interface Props {
    error : Error,
    reset : () => void
}

const ErrorPage = ({ error, reset } : Props) => {
    console.log(error);
  return (
    <>
        <button className="btn btn-primary" onClick={() => reset()}>Reset</button>
        <div>Error Page</div>
    </>
  )
}

export default ErrorPage