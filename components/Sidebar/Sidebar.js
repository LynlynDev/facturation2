
import React from 'react'
import Image from 'next/image'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_container'>
                <div className='sidebar_header'>
                    <h2>Dorian</h2>
                </div>
            </div>
            <div className='sidebar_bottom'>

                <Image src= "/294425.jpg"  alt="294425" width="50" height="50"/>

            </div>

        </div>
    );
};
export default Sidebar;