import Header from '../components/Header'
import Product from '../components/Product'
import Footer from '../components/Footer'
import products from '../data/products'

import { Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <p className='p-1 text-center'>In the name of Allah the Merciful</p>
          <h3>Latest Productes</h3>
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
