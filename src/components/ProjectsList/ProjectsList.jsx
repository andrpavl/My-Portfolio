import {
	Card,
	Links,
	Link,
	ProjectImg,
	StyledProjectsList,
	StyledDescription,
} from "./StyledProjectsList";

const ProjectsList = ({ projects }) => {
	return (
		<>
			<StyledProjectsList>
				{projects.map(({ id, image, name, description, github, livepage }) => (
					<Card key={id}>
						<ProjectImg src={image} alt="project" />
						<h4>{name}</h4>
						<StyledDescription>{description}</StyledDescription>
						<Links>
							<Link href={github} target="blank">
								Github Page
							</Link>
							<Link href={livepage} target="blank">
								Livepage
							</Link>
						</Links>
					</Card>
				))}
			</StyledProjectsList>
		</>
	);
};

export default ProjectsList;
