import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardText, Button, CardFooter, Row, Col } from 'reactstrap';
import GlobalContext from './Context';
function ProductList() {
    const navigate = useNavigate();

    const showCart = () => {
        navigate('/cart');

    }

    const { products, handleCart, cartProducts } = useContext(GlobalContext);
    return (
        <>
            <Button onClick={() => showCart()} color='danger' >Cart Items <b>{cartProducts.length > 0 ? cartProducts.length : ''}</b></Button>
            <Row>
                {
                    products?.length > 0 && products?.map((product, index) => (
                        <Col md="6" lg="4" key={index}>
                            <Card
                                className={`mt-3 text-dark border border-${product?.color} rounded overflow-auto`}
                                style={{ height: "350px", backgroundColor: product?.color, boxShadow: "5px 10px 5px #DCDBDF" }}>
                                <img
                                    alt={product?.title}
                                    src={product?.image}
                                    height="200px"
                                />
                                <CardBody className='overflow-auto'>
                                    <CardTitle>{product?.title || ''}</CardTitle>
                                    <CardText>
                                        <b>&#8377;{product?.price || ''}</b><br />
                                        {product?.description || ''}
                                    </CardText>
                                </CardBody>
                                <CardFooter className='border-0'>
                                    <Button
                                        onClick={() => handleCart(product)}
                                        color="warning" className='mx-4' >
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default ProductList;