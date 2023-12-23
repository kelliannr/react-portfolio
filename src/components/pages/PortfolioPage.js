import React from "react";
import { Outlet } from "react-router-dom";

export default function PortfolioPage(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}