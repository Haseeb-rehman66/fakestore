import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/action/ProductActions";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/1`)
      .catch((err) => {
        console.log("Err", err);
      });
      dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
  },[productId]);
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;
