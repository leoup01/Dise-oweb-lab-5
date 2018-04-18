import React from 'react';
import { Row, Col } from 'reactstrap';
import img1 from '../../images/b.png';
import img2 from '../../images/fi.png';
import img3 from '../../images/t.png';
import img4 from '../../images/f.png';

const Footer = (props) => {
  return (
  	<footer className="text-center">
  		<Row>
  			<Col md="3">
  				<img src={img1} alt="b"/>
    			<img src={img2} alt="fi"/>
  			</Col>
  			<Col md="6">
  				<p className="navFooter"><a href="index.html">Terms of Use</a><strong>|</strong><a href="about.html">About</a><strong>|</strong><a href="contact-us.html">Contact Us</a></p>
        		<p>©Copyright by Universidad Nacional de Costa Rica.</p>
        		<p>2018</p>
  			</Col>
  			<Col md="3">
  				<img src={img3} alt="b"/>
    			<img src={img4} alt="fi"/>
  			</Col>
  		</Row>
  	</footer>
  );
};

export default Footer;