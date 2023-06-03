import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();
export const ProductProvider = ({children}) => {
    const [productsData, setProductsData] = useState([])
    const fetchData = async () => {
        try {
            const response =  await fetch("/api/products")
            const {products} = await response.json()
            setProductsData(products)
          
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])



    return(<ProductsContext.Provider value ={{productsData}}>
        {children}
    </ProductsContext.Provider>)
}