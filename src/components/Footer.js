
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
						<FooterLink href="https://www.facebook.com/elena.mogunova">
							<i>
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<img src={iconFacebook} alt="facebook" width="42px" height="42px"/>
								</span>
							</i>
						</FooterLink>
						<FooterLink href="https://www.instagram.com/elena_mogunova?igsh=OWpnZnB6Zmt2MDUz&utm_source=qr">
							<i>
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<img src={iconInstagram} alt="instagram" width="40px" height="40px"/>
								</span>
							</i>
						</FooterLink>
						<FooterLink href="https://t.me/Lmmjj">
							<i>
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<img src={iconTelegram} alt="telegram" width="45px" height="45px"/>
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
