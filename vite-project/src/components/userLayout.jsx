import Header from "./header"
import { Outlet } from "react-router"


function UserLayout() {
    return (
        <div className="h-screen w-screen">
            <Header />
            <div className="flex flex-grow">
                <div className="w-1/4 flex bg-red-100 border-r-2">
                    <div className="m-2 flex justify-center ">
                        <h1 className="font-bold">Side Bar</h1>
                    </div>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}


export default UserLayout