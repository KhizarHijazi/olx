import { createSlice } from '@reduxjs/toolkit'

const cartSlice =createSlice({
    name : 'cart',
    initialState : {
        cart : []
    },
    reducers : {
        updateCart : (state ,data) =>{
           console.log('data',data)
           console.log('state',state)
           state.cart.push(data.payload)

        }
    }
})

export const {updateCart} = cartSlice.actions
export default cartSlice