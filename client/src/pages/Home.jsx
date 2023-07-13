import { useGetProductsQuery } from '../slices/product_api_slice'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Product from '../components/Product'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <p className='p-1 text-center'>In the name of Allah the Merciful</p>

          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>
              {error?.data?.message || error.error}
            </Message>
          ) : (
            <>
              <h1>Latest Products</h1>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
