import react from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "../components/landingComponent";
export default function AppRouter(){
    return <BrowserRouter>
    <Routes>
        <Route path ="/" element ={<LandingComponent/>}/>
        <Route path ="post" element ={<PostView/>}/>
        <Route path ="new" element ={<LandingComponent/>}/>
        <Route path ="all" element ={<LandingComponent/>}/>
        
        </Routes> 
    </BrowserRouter>
}