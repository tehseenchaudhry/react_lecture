import { createSlice } from "@reduxjs/toolkit"


const CartSlice = createSlice({
    initialState: [],
    name: "Cart",
    reducers: {
        addProduct: (state, action) => {
            // console.log(action.payload);

            // state.push(action.payload)


            const existingProduct = state.find((item) => {

                return item.id == action.payload.id

            })


            if (!existingProduct) {
                state.push(action.payload)
            }

            else {

                existingProduct.qty++

            }


        },
        removeProduct: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)


        },
        increaseQty: (state, action) => {

            const existingProduct = state.find((item) => {

                return item.id == action.payload.id

            })
            existingProduct.qty += 1

        },
        decreaseQty: (state, action) => {
            const existingProduct = state.find((item) => {

                return item.id == action.payload.id

            })

            if (existingProduct.qty > 1) {
                existingProduct.qty -= 1
            }
        }
    }
})


export const { addProduct, decreaseQty, increaseQty, removeProduct } = CartSlice.actions

export default CartSlice.reducer