import { useParams,Link } from "react-router-dom";

function ProductDetailPage(){
   
    const params = useParams();
    // params.productId;

    return(
    <>
        <h1>Product Details</h1>
        <p>Product url:  <em>http://localhost:3000/products/{params.productId}</em></p>
        {/* If you have relative path in the Link then add relative='path' so that it does not directly go back to its root because here products and products/productId are siblings  */}
        <p><Link to='..' relative="path">Back to products</Link></p>
    </>
   );
}
export default ProductDetailPage;