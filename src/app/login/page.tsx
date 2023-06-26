"use client";

import { FormEvent, useState } from "react";
import { User } from "../models/User";
import { useRouter } from "next/navigation";

export default function page(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const Userlist: User[] = [
        { username: 'admin', password: 'admin'}
    ]

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const findUser = Userlist.find(e => e.username === username && e.password === password)
        if(findUser) {
            console.log('OK')
            router.push('/home')
        }
    }

    return(
        <>
            <main className="flex flex-col w-full h-full items-center justify-center">
                <h1 className="text-5xl mb-20 mt-16"><span className="text-green-800 font-bold">co</span>Working</h1>
                <form className="flex flex-col w-96 h-96" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        className="border rounded-md h-10 pl-3" 
                        type="text" 
                        name="username"
                        id="username" 
                        autoComplete="off"
                        onChange={(e) => setUsername((e.target.value))}
                        required/>
                    <label htmlFor="">Password</label>
                    <input
                        className="border rounded-md h-10 p-3" 
                        type="password" 
                        name="password"
                        id="password"
                        onChange={(e) => setPassword((e.target.value))}
                        required/>
                    <button className="bg-green-800 mt-5 p-2 rounded-md text-white" type="submit"> Entrar</button>
                </form>
            </main>
        </>
    )
}