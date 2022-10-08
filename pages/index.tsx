import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Navbar,
  Container,
  Col,
  Row,
  Nav,
  Button,
  NavDropdown,
} from "react-bootstrap";

import AppNav from "../src/AppNav";
import Item from "../src/Item";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DeploySentinel Tea Shop</title>
      </Head>
      <AppNav />
      <Container style={{ maxWidth: 640, marginTop: 100 }}>
        <Row className="mb-5">
          <h1>Our Tea Selection</h1>
        </Row>
        <Row>
          <Col>
            <Item
              src="https://cdn.pixabay.com/photo/2015/07/01/08/42/oolong-827397_1280.jpg"
              name="Oolong Tea"
              price="$6.50"
              action="Add to Cart"
            />
            <Item
              src="https://cdn.pixabay.com/photo/2021/03/08/16/30/matcha-6079526_1280.jpg"
              name="Matcha Tea"
              price="$7.50"
              action="Add to Cart"
            />
            <Item
              src="https://cdn.pixabay.com/photo/2022/02/23/18/11/drink-7031154_1280.jpg"
              name="Jasmine Tea"
              price="$5.00"
              action="Add to Cart"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
