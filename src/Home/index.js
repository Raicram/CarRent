import React from "react";
import MainContent from "./Components/MainContent";
import Reasons from './Components/Reasons';
import Opinion from "./Components/ClientsOpinion";
import SeeCars from './Components/SeeCars'
import FooterHome from "./Components/Footer";

export default function Home () {
    return(
        <div>
            <MainContent/>
            <Reasons/>
            <Opinion/>
            <SeeCars/>
            <FooterHome/>
        </div>
    )
}