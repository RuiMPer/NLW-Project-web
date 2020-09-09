import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://media-exp1.licdn.com/dms/image/C4E35AQFD7riu4O_Tmg/profile-framedphoto-shrink_200_200/0?e=1599721200&v=beta&t=ATIxJCDhcR5JHbsZPOY0igeWVVu0V5_Ej1Lg4svZsBE"
					alt="Rui Pereira"
				/>
				<div>
					<strong>Rui Pereira</strong>
					<span>Programação</span>
				</div>
			</header>
			<p>
				Entusiasta das melhores tecnoligias de Programação.
				<br />
				<br />
				Apaixonado por mudar pelo desenvolvimento de software.
			</p>
			<footer>
				<p>
					Preço/hora
					<strong>15€</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="whatsapp" />
					Entrar em contacto
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;
