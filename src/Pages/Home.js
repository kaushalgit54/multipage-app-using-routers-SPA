import {Link, useNavigate} from 'react-router-dom';

function HomePage(){
    const navigate = useNavigate();
    //Programatically navigate to different url
    function navigateHandler(){
     navigate('/products');
    }
    return <div>
        <h1>My Home Page</h1>
        <p>
            Go to <Link to="products">List of products</Link>.
        </p>
0       <p>
    <button onClick={navigateHandler}>Navigate to Products</button>
</p>
    </div>;
}

export default HomePage;