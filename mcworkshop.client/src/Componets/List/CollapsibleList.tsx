import React, { useState } from "react";
import "./CollapsibleList.css"

interface CollapsibleListProps {
    title: string;
    children: React.ReactNode;
}

const CollapsibleList: React.FC<CollapsibleListProps> = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="Collap">
            <button onClick={() => setOpen(!open)}>
                <span>{title}</span>
                <span className={`arrow ${open ? "open" : ""}`}>▼</span>
            </button>

            <div className={`content ${open ? "open" : "closing"}`}>
                {children}
            </div>
        </div>
    );
};

export default CollapsibleList;