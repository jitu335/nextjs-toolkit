import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import footer from '../../orffosoft/screens/footer';
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const dashboard = () => {
  return (
    <div>
      <h3>pages/orffosoft/screens/dashboard.jsx</h3>
      <style>{"body { background-color: #e6005c }"}</style>
      <Image src="/images/jeans.png" height={244} width={244} alt="jitu" />
      <Image src="/images/cap.jpg" height={244} width={244} alt="jitu" />
      <Image src="/images/shirt.jpg" height={244} width={244} alt="jitu" />
      <Image src="/images/lungi.jpg" height={244} width={244} alt="jitu" />
    </div>
  );
};

export default dashboard;
