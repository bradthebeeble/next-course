import React from 'react'
import UsersTable from './UsersTable'
import Link from 'next/link'

interface Props {
    searchParams : {
        sortBy : string
    }
}


const UsersPage = async ({searchParams: { sortBy }} : Props) => {


  return (
    <>  
        <h1>Users</h1>
        <Link href="/users/new" className="btn">New User</Link>
       <UsersTable sortBy={ sortBy }  />
    </>
    )
}

export default UsersPage