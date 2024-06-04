import { EduItem } from "../../components/EduItem/EduItem";
import stack from "../../stack";
import { StyledSkills } from "./StyledAboout";

export const About = () => {
	const year = new Date().getFullYear() - 1988;

	return (
		<>
			<h3>About me:</h3>
			<p>
				Hello everyone! My name is Andrii, and I want to share a bit about
				myself. I am {year} years old. I was born and raised in the most
				charming country in the world - Ukraine. But more than 10 years ago, my
				life path led me to an equally charming Denmark, where I am living now
				together with my family.
			</p>
			<h3>My education:</h3>
			<ul>
				<EduItem
					companyName={"Khoroshiv gymnasium"}
					companyLink={"https://school15643.wixsite.com/my-site"}
					date={"1994-2005"}
				/>
				<EduItem
					companyName={"Polissya National University"}
					companyLink={
						"https://polissiauniver.edu.ua/polissia-national-university/"
					}
					date={"2005-2019"}
					occup={"Managment of Foreign Affairs. Bachelor degree"}
				/>
				<EduItem
					companyName={"GoIT - start your career in IT"}
					companyLink={"https://goit.global/ua/"}
					date={"2022-2023"}
					occup={"FullStack Developer"}
				/>
				<EduItem
					companyName={"ITVDN"}
					companyLink={"https://itvdn.com/ua"}
					date={"2024-present"}
					occup={"Frontend Developer"}
				/>
			</ul>
			<StyledSkills>
				<div>
					<h3>Hard skills:</h3>
					<ul>
						{stack.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>
				<div>
					<h3>Soft skills:</h3>
					<ul>
						<li>Analytical</li>
						<li>Teamwork</li>
						<li>Problem solving</li>
						<li>Organizational</li>
						<li>
							Willingness<br /> to learn
						</li>
					</ul>
				</div>
				<div>
					<h3>Languages:</h3>
					<ul>
						<li>Ukrainian</li>
						<li>English</li>
						<li>Danish</li>
					</ul>
				</div>
			</StyledSkills>
		</>
	);
};
