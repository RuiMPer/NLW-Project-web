import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis">
				<form id="search-teachers">
					<div className="input-block">
						<label htmlFor="subject">Matéria</label>
						<input type="text" id="subject" />
					</div>
					<div className="input-block">
						<label htmlFor="week_day">Dia da Semana</label>
						<input type="text" id="week_day" />
					</div>
					<div className="input-block">
						<label htmlFor="time">Hora</label>
						<input type="text" id="time" />
					</div>
				</form>
			</PageHeader>

			<main>
				<article className="teacher-item">
					<header>
						<img
							src="https://media-exp1.licdn.com/dms/image/C4E35AQFD7riu4O_Tmg/profile-framedphoto-shrink_200_200/0?e=1598598000&v=beta&t=GjFElLNYRJTLs_Z4wqo-65dJ_DQhZbcf3QQNhKYxpK0"
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
			</main>
		</div>
	);
}

export default TeacherList;
