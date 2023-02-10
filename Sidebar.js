import { FcBusinessman, FcNews, FcPieChart, FcMultipleDevices, FcSupport } from "react-icons/fc";

const Sidebar = () => {
    return ( 
        <div className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-gray-900 text-white shadow-lg pt-8">
            <SidebarIcon icon={<FcBusinessman size="60"/>} className=""/>
            <SidebarIcon icon={<FcNews size="60"/>}/>
            <SidebarIcon icon={<FcPieChart size="60"/>}/>
            <SidebarIcon icon={<FcMultipleDevices size="60"/>}/>
            <SidebarIcon icon={<FcSupport size="60"/>}/>
        </div>
     );
}

const SidebarIcon =({icon, text='tooltip'})=>(
    <div className="sidebar-icon group z-50">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100 z-50">
            {text}
        </span>
    </div>
);
 
export default Sidebar;