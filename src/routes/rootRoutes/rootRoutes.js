import React from "react";
const Home = React.lazy(()=>import("../../views/home/Home"));
const Hello = React.lazy(()=>import("../../views/Hello/Hello"));
const Gallery = React.lazy(()=>import("../../views/Gallery/gallery"));


export const rootRoutes = [
    {path:'/home', component: Home},
    {path:'/gallery', component: Gallery},
    {path:'/abcde', component: Hello},
    {path:'/abcdfdf', component: Hello},
    {path:'/abcdfdf', component: Hello},
    {path:'/abcdfdfdf', component: Hello}

]