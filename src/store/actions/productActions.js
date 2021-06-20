import { ADD_PRODUCTS, FETCH_PRODUCTS, UPDATE_PRODUCTS, DELETE_PRODUCTS } from "../types/type";
import { db } from "../../config/firebase";

// Fetching Products

export const fetchProduct = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let collect = await db.collection('products').get();
        let products = [];
        collect.forEach(doc => {
            products.push({
                docID: doc.id,
                ...doc.data(),
            });
        });
        console.log('Data fetched into Firebase', products);
        dispatch({
            type: FETCH_PRODUCTS,
            payload: products,
        });
    } catch (error) {
        console.log('error', error);
        alert(error);
    } finally {
        setLoading(false);
    }
};

// Adding Products

export const addProduct = (data, setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        await db.collection('products').add(data);
        console.log('Data added into Firebase');
        dispatch({
            type: ADD_PRODUCTS,
            payload: data
        });
    } catch (error) {
        console.log('error', error);
        alert(error);
    } finally {
        setLoading(false);
    }
};

// Delete Products

export const deleteProduct = (docID, setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        await db.collection('products').doc(docID).delete();
        console.log('Data deleted into Firebase');
        dispatch({
            type: DELETE_PRODUCTS,
            payload: docID,
        });
    } catch (error) {
        console.log('error', error);
        alert(error);
    } finally {
        setLoading(false);
    }
};

// Updatind Products

export const updateProduct = (docID, data, setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        await db.collection('products').doc(docID).update(data);
        console.log('Data in Updated in firebase');
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: { docID, data }
        })
    } catch (error) {
        console.log('error', error);
        alert(error);
    } finally {
        setLoading(false);
    }
};