// Import React
import React from "react";

// Import UI components from reactstrap framework.
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// Import the Container component.
import Container from "../../components/Container";

// Footer component
const Footer = props => {
  return (
    <div className="footer">
      <Container>
        <Card>
          <CardBody>
            <CardTitle className="footer-heading">
              New York Times React Search
            </CardTitle>
            <CardText>
              <b>Copyright &copy; 2018</b>
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

// export Footer component.
export default Footer;
