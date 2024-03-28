import React from 'react'

const Header = () => {
    return (
        <>
            <header className='bg-primary h-14 text-white flex items-center'>
                <div className="drawer z-20">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                        <label htmlFor="my-drawer" className="pl-4 drawer-button"><i className="fa-solid fa-bars" style={{ color: "black", fontSize: "22px", cursor: "pointer" }}></i></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content cursor-pointer">
                            <div className='text-2xl p-2'>Pokemon Types</div>
                            <li className='p-2 text-lg hover:bg-primary'>Normal type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Fighting type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Flying type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Poison type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Ground type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Rock type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Bug type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Ghost type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Steel type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Fire type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Water type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Grass type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Electric type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Pyschic type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Ice type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Dragon type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Dark type</li>
                            <li className='p-2 text-lg hover:bg-primary'>Fairy type</li>
                        </ul>
                    </div>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"><i className="fa-solid fa-user" style={{color:"white"}}></i></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                        <li><a href='#hello'>Log out</a></li>
                      
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header