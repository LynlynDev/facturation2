/** rafce pour générer la première partie du code ci-dessous */
import React from 'react'
import { useRouter } from "next/router";


const InvoiceDetails = () => {

    const router = useRouter()

    const goBack = () => router.push('/')

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

            <div className="invoice__details">
                <div className="details__box">
                    <div>
                        <h4>RT580G</h4>
                        <p>Re-branding</p>
                    </div>
                    <div>
                        <p>Block - B, Road - 41</p>
                        <p>Sylhet</p>
                        <p>SYL 3108</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
                {/** =============details box=========== */}
                <div className="details__box">
                    <div>
                        <div className="invoice__created-date">
                            <p>Invoice Date</p>
                            <h4>29-07-2022</h4>
                        </div>
                        <div>
                            <p className="invoice__payment">Payment Due</p>
                            <h4>$580</h4>
                        </div>
                    </div>

                    {/** ========= invoice client address ========= */}
                    <div className="invoice__client-address">
                        <p>Bill to</p>
                        <h4>BraLyn</h4>
                        <div>
                            <p>Block - B, Road - 41</p>
                            <p>Sylhet</p>
                            <p>SYL 3108</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>

                    <div>
                        <p>Send to</p>
                        <h4>bralyn5523@gmail.com</h4>
                    </div>
                </div>

                {/** ============ invoice items =========== */}
                <div className="invoice__item-box">
                    <ul className="list">
                        <li className="list__item">
                            <p className="item__name-box">Item Name</p>
                            <p className="list__item-box">Qty</p>
                            <p className="list__item-box">Price</p>
                            <p className="list__item-box">Total</p>
                        </li>
                        {/** ============ invoice item ============= */}
                        <li className="list__item">
                            <div className="item__name-box">
                                <h5>Ecommerce Website</h5>
                            </div>

                            <div className="list__item-box">
                                <p>2</p>
                            </div>
                            <div className="list__item-box">
                                <p>$225</p>
                            </div>
                            <div className="list__item-box">
                                <h5>$450</h5>
                            </div>
                        </li>

                        <li className="list__item">
                            <div className="item__name-box">
                                <h5>Personal Website</h5>
                            </div>

                            <div className="list__item-box">
                                <p>1</p>
                            </div>
                            <div className="list__item-box">
                                <p>$325</p>
                            </div>
                            <div className="list__item-box">
                                <h5>$325</h5>
                            </div>
                        </li>
                    </ul>
                </div>

                {/** ============ grand total ========== */}
                <div className='grand__total'>
                    <h5>Grand Total</h5>    
                    <h2>$550</h2>                                                 
                </div>
            </div>

        </div>
    );
};

export default InvoiceDetails
