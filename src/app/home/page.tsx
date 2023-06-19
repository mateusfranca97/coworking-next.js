export default function page(){
    return(
        <body className="flex w-screen h-screen">
            <aside className="bg-green-800 h-[97vh] w-96 rounded-xl m-2">
            </aside>
            <main className="flex flex-col w-full h-full items-center justify-center">
                <h1 className="text-5xl mb-20 mt-16"><span className="text-green-800 font-bold">co</span>Working</h1>
                <form className="flex flex-col w-96 h-96" action="">
                    <label htmlFor="">Username</label>
                    <input className="border rounded-md h-10 pl-3" type="text" name="username" id="username" required autoComplete="off"/>
                    <label htmlFor="">Password</label>
                    <input className="border rounded-md h-10 p-3" type="password" name="password" id="password" required/>
                    <button className="bg-green-800 mt-5 p-2 rounded-md text-white" type="submit"> Entrar</button>
                </form>
            </main>
        </body>
    )
}