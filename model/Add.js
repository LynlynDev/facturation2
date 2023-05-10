import mongoose from 'mongoose'
const {ObjetId} = mongoose.Schema

const addSchema = new mongoose.Schema(
    {
        address:[{
        
        address1:{
            type: String,
            require: true
        },
        cityE:{ 
            type: String,
            require: true
        },
        postalE:{ 
            type: String,
            require: true
        },
        contryE:{ 
            type: String,
            require: true
        },
        cityC:{ 
            type: String,
            require: true
        },
        postalC:{ 
            type: String,
            require: true
        },
        contryC:{ 
            type: String,
            require: true
        },
        firstname:{ 
            type: String,
            require: true
        },
        lastname:{ 
            type: String,
            require: true
        },
   } ],
   paymentMethode:{ 
    type: String,
    require: true
},
   description:{ 
    type: String,
    require: true
},
   dateTime:{ 
    type: String,
    require: true
},
   product:{ 
    type: String,
    require: true
},
   price:{ 
    type: String,
    require: true
},
   qty:{ 
    type: String,
    require: true
}
    },
    {
        timestemp: true
    }
)
const Add = mongoose.models.Add || mongoose.model('Add', addSchema);
export default Add