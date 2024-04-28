import React from "react";
import ContactUserCard from "./ContactUserCard";

function Contacts(){
    
    return (
        <div className="contacts">
            <h2>Contacts</h2>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    )
}

export default Contacts;