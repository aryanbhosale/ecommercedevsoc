import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted) {
                setData(await response.clone().json()); //creating a clone of the response so that it doesn't clash with the filters
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
            </>
        );
    }

    const filterProduct = (string) => {
        const filteredList = data.filter((product) => product.category === string);
        setFilter(filteredList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'> 
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
                        ALL
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                        MEN'S WEAR
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                        WOMEN'S WEAR
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                        ACCESSORIES
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                        ELECTRONICS
                    </button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">DETAILS</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    }

  return (
    <div>
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-4 text-center'>EXPLORE CATEGORIES</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts />}
            </div>
        </div>
    </div>
  );
}

export default Products;