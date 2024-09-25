import { useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";




export const LogoutButton = () =>{

    const { data: session, status } = useSession();

    if ( status === 'loading'){
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <IoShieldOutline />
            <span className="group-hover:text-gray-700">Logout</span>
        </button>
    }

    return (
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
        </button>
    );
}