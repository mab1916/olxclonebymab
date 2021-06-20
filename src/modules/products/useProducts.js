import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, addProduct, deleteProduct, updateProduct } from "../../store/actions/productActions";

export default function useProducts() {
    const [productIndex, setIndex] = useState(0);
    const [errorMsg, setMsg] = useState('');
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState(0);
    const [updateFlag, setFlag] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ctaLoading, setCtaLoading] = useState(false);

    const dispatch = useDispatch();

    const products = useSelector(state => state.ProductReducer.products);
    console.log('Products from ProductReducer', products);

    useEffect(() => {
        dispatch(fetchProduct(setLoading))
    }, []);

    // Deleting Data

    const deleteData = (docID) => {
        dispatch(deleteProduct(docID, setLoading));
    }

    // Fetching Data

    const fetchData = (product) => {
        setIndex(product.docID);
        setName(product.name);
        setImg(product.img);
        setPrice(product.price);
        setFlag(true);
    }

    // Adding Data

    const addData = () => {
        setMsg('');
        if (name != '' && img != '' && price != '') {
            let product = { name, img, price }
            dispatch(addProduct(product, setCtaLoading))
            setName('');
            setImg('');
            setPrice('');
        } else {
            setMsg("Please fill all the fields...");
        }
    }

    // Update Data

    const updateData = () => {
        setMsg('');
        if (name != '' && img != '' && price != '') {
            let product = { name, img, price }
            dispatch(updateProduct(productIndex, product, setLoading));
            // } else {
            //     setMsg("Please fill all the fields...");
        }
        setName('');
        setImg('');
        setPrice('');
        setFlag(false);
    }

    return [productIndex, products, errorMsg, name, img, price, updateFlag, loading, ctaLoading, setName, setImg, setPrice, fetchData, deleteData, addData, updateData]
}