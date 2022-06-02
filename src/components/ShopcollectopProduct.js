import React,{useEffect,useState} from 'react'
import { Container, Grid, Row, Col,Button,RangeSlider } from 'rsuite';
import Product from './Product'
import axios from 'axios';
import Slider from "react-slick";


const ShopcollectopProduct = () => {


    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    let [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            let { data } = await axios.get("http://localhost:8000/products")
            setProduct(data)
        }
        fetchProduct()

    }, [])
  return (
    <>
    
    
    <Grid>
        
        <Row className="show-grid" gutter={30}>
        <Col xs={6}>
            <div className="left" style={{marginTop: '40px'}}>
                <div className="detail">
                    <div className="top">
                        <h6>Refine by</h6>
                        <Button className='clear-btn'>Clear All</Button>
                    </div>
                    <p>Price: $10</p>
                    <p>Color: Violet</p>
                    <p>Size: <span style={{fontSize: '18px',color: '#252525',fontWeight: '500'}}>M</span></p>
                </div>
                <div className="category det">
                    <h4>Categories</h4>
                    <ul>
                        <li>Sport Wear <span>-</span></li>
                            <ul style={{marginLeft: '20px'}}>
                                <li>Woman<span>56</span></li>
                                <li>Men<span>17</span></li>
                            </ul>
                        <li>Accessories<span>+</span></li>
                        <li>New<span>+</span></li>
                    </ul>
                </div>

                <div className='range-slider'>
                <RangeSlider
                    progress
                    style={{ marginTop: 16 }}
                />
                <h6>Price $12 - $97</h6>
                </div>
                <div className="color det">
                    <h4>Choose Color</h4>
                    <ul>
                        <li><span></span><p>Violet</p></li>
                        <li><span style={{background: '#1473A9'}}></span><p>Blue</p></li>
                        <li><span style={{background: '#FBDADA'}}></span><p>Pink</p></li>
                        <li><span style={{background: '#519D04'}}></span><p>Green</p></li>
                    </ul>
                </div>
                <div className="size det">
                <h4>Choose Size</h4>
                <div className="sizes">
                    <ul>
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                    </ul>
                </div>
                </div>

                <div className="brands det">
                    <h4>brands</h4>
                    <div className="brand-name">
                        <ul>
                            <li>Brandname 1</li>
                            <li>Super Brandname 2</li>
                            <li>Brandname 3</li>
                            <li>Awesome Brandname 4</li>
                        </ul>
                    </div>
                </div>
                <div className="popular-product det">
                    <h4>Popular Products</h4>
                    {/* <div className="popular-slider">
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                        </Slider>
                    </div> */}
                </div>
            </div>
        </Col>
        <Col xs={18}>
            <Row>
            {product.map(item => (
                <Col xs={8}>
                    <Product img={item.img} heading={item.name} rating={item.rating} brand={item.brand} color={item.color} size={item.sizes} price={item.price} />
                </Col>
            ))}
            </Row>
        </Col>
        </Row>
        <Container className='container'>
        <div className="text">
        <Row>
            <Col lg={6}></Col>
            <Col lg={18}>
                <h6>Seo Text</h6>
                <p>Maecenas magna enim, hendrerit sed ex ac, cursus faucibus odio. Vivamus quis placerat orci. Mauris a maximus leo. Proin efficitur orci ex, finibus semper mauris venenatis in. Nunc ac semper lacus. Suspendisse orci purus, pretium sed risus quis, pellentesque interdum turpis. Sed maximus velit at libero rutrum interdum. Curabitur tempor mauris ut sem dictum congue. Etiam imperdiet, magna non vehicula egestas, nunc felis dictum risus, id ornare leo justo id nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra mauris vitae tellus congue auctor.</p>
                <p>In hac habitasse platea dictumst. Ut molestie lectus vitae nisl cursus tempor eu sit amet nulla. Sed quis lectus ac metus scelerisque finibus. Fusce nec mollis tortor. Nullam cursus urna ut velit elementum luctus. Morbi sed orci ipsum. Nullam pretium dolor nec risus vulputate, id efficitur enim hendrerit.</p>
            </Col>
        </Row>
        </div>
        </Container>
    </Grid>
    <div className="insta-part">
            <Row  gutter={0}>
                <Col lg={4}>
                    <img src="./assets/images/insta1.png" alt="" />
                </Col>
                <Col lg={4}>
                    <img src="./assets/images/insta2.png" alt="" />
                </Col>
                <Col lg={4}>
                    <img src="./assets/images/insta3.png" alt="" />
                </Col>
                <Col lg={4}>
                    <img src="./assets/images/insta4.png" alt="" />
                </Col>
                <Col lg={4}>
                    <img src="./assets/images/insta5.png" alt="" />
                </Col>
                <Col lg={4}>
                    <img src="./assets/images/insta6.png" alt="" />
                </Col>
            </Row>
        </div>
    </>
  )
}

export default ShopcollectopProduct