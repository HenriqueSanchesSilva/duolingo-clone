import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {  
    return (
        <nav className=
            "flex items-center bg-green-500 h-[50px] w-full lg:hidden fixed top-0 px-4 border-b z-50">
            <MobileSidebar />
        </nav>
    );
}