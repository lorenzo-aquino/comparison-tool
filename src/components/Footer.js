import React from "react";
import { Container, Link } from "@material-ui/core";

const Footer = () => (
  <Container className="MuiPaper-elevation4 footer">
    <p>
      <span>created by </span>
      <Link color="textPrimary" href="https://lorenzo-aquino.github.io">
        Lorenzo Aquino
      </Link>
    </p>
    <p>
      <span>Created my free logo at </span>
      <Link color="textPrimary" href="https://logomakr.com">
        LogoMakr.com
      </Link>
    </p>
  </Container>
);

export default Footer;
