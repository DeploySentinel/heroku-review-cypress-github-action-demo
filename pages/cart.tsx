import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
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
  useEffect(() => {
    // Latest version of react will call useEffect multiple times,
    // so it's easier to just put the code out here
    console.warn("Oh hai there! 👋 I hope you're enjoying the demo 😄");

    fetch("/api/cart").then((res) => {
      if (!res.ok) {
        console.error(
          new Error(
            `${res.status} ${res.statusText} - Failed to fetch cart information`
          )
        );
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>My Cart - DeploySentinel Tea SHop</title>
      </Head>
      <AppNav />
      <Container style={{ maxWidth: 640, marginTop: 100 }}>
        <Row className="mb-5">
          <div className="d-flex justify-content-between align-items-center">
            <h1>My Cart</h1>
            <div className="text-muted">
              Total: $<span data-test-id="cart-total">14.00</span>
            </div>
          </div>
        </Row>
        <Row>
          <Col>
            <Item
              src="https://cdn.pixabay.com/photo/2015/07/01/08/42/oolong-827397_1280.jpg"
              name="Oolong Tea"
              price="$6.50"
              action="Remove"
            />
            <Item
              src="https://cdn.pixabay.com/photo/2021/03/08/16/30/matcha-6079526_1280.jpg"
              name="Matcha Tea"
              price="$7.50"
              action="Remove"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
