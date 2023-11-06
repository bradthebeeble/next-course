import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';


interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortBy: string
}

const UsersTable = async ({ sortBy }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    const sortedUsers = sort(users).asc(sortBy === 'email' ? user => user.email : user => user.name)

    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th><Link href='?sortBy=name'>Name</Link></th>
                    <th><Link href='?sortBy=email'>Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)}
            </tbody>
        </table>)
}

export default UsersTable