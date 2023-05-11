import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { constants } from "buffer";
// import * as Yup from "yup"
const AddNew = () => {
    //fait un npm i yup
    // const verification  = Yup.object({
    //     //exemple 
    //     firstName : Yup.String()
    //     .required('entrez le nom svp!')
    //     .min(5,"le nombre min de lettre est de 5")
    //     .max(23,'le nombre max de lettre est de 23'),
    // })
    const router = useRouter();
    const [items, setItems] = useState([])

    const senderStreet = useRef('')
    const senderCity = useRef('')
    const senderPostalCode = useRef('')
    const senderCountry = useRef('')
    const clientName = useRef('')
    const clientEmail = useRef('')
    const clientStreet = useRef('')
    const clientCity = useRef('')
    const clientPostalCode = useRef('')
    const clientCountry = useRef('')
    const description = useRef('')
    const createdAt = useRef('')
    const paymentTerms = useRef('')
    //add products to the items list
    const addItems = () => {
        setItems([...items,
             { name: '', 
             quantity: 0, 
             price: 0, 
             //total: (quantity*price)
             total: 0}]);
        console.log(items);
    };

    //handler change
    const handlerChange = (event, i) => {
        const { name, value } = event.target
        const list = [...items];
        list[i][name] = value;
        list[i]['total'] = list[i]['quantity']* list[i]['price']
        setItems(list);
    }
    
    //delete product items
    const deleteItems = (i) =>{
        const inputData = [...items]
        inputData.splice(i, 1);
        setItems(inputData);
    }

    //total amount  of all products items
    const totalAmount = items.reduce((acc,curr)=>(acc+ curr.total),0)

    return (
        <div className="main__container">
            <div className="new__invoice">
                <div className="new__invoice-header">
                    <h3>New Invoice</h3>
                </div>
                {/** ======= new invoice body ====== */}
                <div className="new_invoice-body">
                    {/** ========== bill from========= */}
                    <div className="bill__from">
                        <p className="bill__title">Bill from</p>
                        <div className="form__group">
                            <p>Street Address</p>
                            <input type="text" ref={senderStreet}/>
                        </div>

                        <div className="form__group inline__form-group">
                            <div>
                                <p>City</p>
                                <input type="text" ref={senderCity}/>
                            </div>

                            <div>
                                <p>Postal Code</p>
                                <input type="text" ref={senderPostalCode}/>
                            </div>

                            <div>
                                <p>Country</p>
                                <input type="text" ref={senderCountry}/>
                            </div>
                        </div>
                    </div>

                    {/** ========== bill to ========  */}

                    <div className="bill__to">
                        <p className="bill__title">Bill to</p>
                        <div className="form__group">
                            <p>Client Name</p>
                            <input 
                            type="text"
                            placeholder=''
                            name="" ref={clientName}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                        </div>

                        <div className="form__group">
                            <p>Client Email</p>
                            <input 
                            type="text"
                            placeholder=''
                            name="" ref={clientEmail}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                        </div>

                        <div className="form__group">
                            <p>Client Address</p>
                        <input 
                            type="text"
                            placeholder=''
                            name="" ref={clientStreet}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                        </div>

                        <div className="form__group inline__form-group">
                            <div>
                                <p>City</p>
                            <input 
                            type="text"
                            placeholder=''
                            name="" ref={clientCity}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                            </div>

                            <div>
                                <p>Postal Code</p>
                            <input 
                            type="text"
                            placeholder=''
                            name="" ref={clientPostalCode}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                            </div>

                            <div>
                                <p>Country</p>
                            <input 
                            type="text"
                            placeholder=''
                            name="" ref={clientCountry}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                            </div>
                        </div>

                        <div className="form__group inline__form-group">
                            <div className="inline__group">
                                <p>Invoice Date</p>
                            <input 
                            type="text"
                            placeholder=''
                            name="" ref={createdAt}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                            </div>

                            <div className="inline__group">
                                <p>Payment Terms</p>
                            <input 
                            type="text"
                            placeholder=''
                            name="" ref={description}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                            </div>

                            <div className="inline__group">
                                <p>Projet Description</p>
                                <input 
                            type="text"
                            placeholder=''
                            name="" ref={description}
                            onChange={(e) =>handlerChange(e.target.value)} 
                            />
                            </div>

                        </div>
                    </div>

                    {/** =========== invoice Products items ======== */}
                    <div className="invoice__items">
                        <h3>Item List</h3>
                        {
                            items?.map((item, i) => (
                                <div className="item" key={i}>
                                    <div className="form__group inline__form-group">
                                        <div>
                                            <p>Item Name</p>
                                            <input type="text" name="name" onChange={e =>
                                                handlerChange(e, i)} placeholder="required" />
                                        </div>

                                        <div>
                                            <p>Qty</p>
                                            <input type="number" name="quantity" onChange={e =>
                                                handlerChange(e, i)} placeholder="required" />
                                        </div>

                                        <div>
                                            <p>Price</p>
                                            <input 
                                            type="number" 
                                            name="price" 
                                            onChange={(e) => handlerChange(e, i)} placeholder="required" />
                                        </div>
                                        <di>
                                            <p>Total</p>
                                            <h4>{item.Total}</h4>
                                        </di>

                                        <button className="edit__btn">Delete</button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <button className="add__item-btn" onClick={addItems} > Add New Item</button>

                    <div className="new__invoice-btns">
                        <button className="edit__btn" onClick={() => saveHandler()}>Discard</button>
                        <div>
                            <button className="draft__btn">Save as Draft</button>

                            <button className="mark__as-btn">Send & Save</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddNew;