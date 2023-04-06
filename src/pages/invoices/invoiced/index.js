/** rafce pour générer la première partie du code ci-dessous */
 import React from 'react'
 import { useRouter } from "next/router";
 

    const InvoiceDetails = () => {

        const router = useRouter()

        const goBack = ()=> router.push('/')

         return (
        <div className="main__container">
            <div className="back__btn">
                <h6 onClick={goBack}>Go Back</h6>
            </div>
            {/** =====invoice details header ======= */}
            <div className="invoice__details-header">
                <div className="details__status">
                    <p className="status">Status</p>

                    <button className="pending__status">pending</button>
                </div>

                <div className="details__btns">
                    <button className="edit__btn">Edit</button>

                    <button className="delete__btn">Delete</button>

                    <button className="mark__as-btn">Mark as Paid</button>
                </div>

            </div>
    </div>
    );
 };

 export default InvoiceDetails
