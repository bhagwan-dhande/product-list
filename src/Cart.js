import React, { useContext } from 'react';
import GlobalContext from './Context';
import { Card, CardTitle, CardBody, CardText, Button, CardFooter, Row, Col } from 'reactstrap';

function Cart(props) {
    const { cartProducts } = useContext(GlobalContext);
    return (
        <div>
            <Row>
                {
                    cartProducts?.length > 0 ? cartProducts?.map((product, index) => (
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
                            </Card>
                        </Col>
                    )) : <h1>Cart Is Empty</h1>
                }
            </Row>
        </div>
    );
}

export default Cart;