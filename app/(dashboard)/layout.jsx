import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/components/app-sidebar"
import Header from './components/Header'
import SaveUserInfo from './../components/SaveUserInfo';


const layout = ({children}) => {
  return (
    <SidebarProvider className="bg-gray-200">
      <AppSidebar />
      <main className=" p-4">
        <SidebarTrigger className="text-orange-800 lg:hidden text-2xl"/>
        <div>
      
      <Header/>
    </div>
        <div className="border-t border-gray-400 my-6">
          <SaveUserInfo/>
        {children}

        </div>
        
        
        
      </main>
     
    </SidebarProvider>
  )
}

export default layout
