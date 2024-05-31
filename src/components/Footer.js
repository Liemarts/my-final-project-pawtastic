// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	FooterLink,
} from "./FooterStyles";
import iconFacebook from './icons8-facebook-40.png';
import iconInstagram from './icons8-instagram-40.png';
import iconTelegram from './icons8-telegram-48.png';


const Footer = () => {
	return (
		<Box>

			<FooterContainer>
                
			        <Row>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<a href="https://www.facebook.com/elena.mogunova"><img src={iconFacebook} alt="facebook" width="42px" height="42px"/></a>
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<a href="https://www.instagram.com/elena_mogunova?igsh=OWpnZnB6Zmt2MDUz&utm_source=qr"><img src={iconInstagram} alt="instagram" width="40px" height="40px"/></a>
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<a href="https://t.me/Lmmjj"><img src={iconTelegram} alt="telegram" width="45px" height="45px"/></a>
								</span>
							</i>
						</FooterLink>
				</Row>
			</FooterContainer>

            <h1
				style={{
					color: "#d4d3d3",
					textAlign: "center",
					marginTop: "50px",
                    margin: "40px",
                    fontSize: "15px",
				}}
			>
                Paw-tastic Care © 2024
			</h1>

		</Box>
	);
};
export default Footer;
