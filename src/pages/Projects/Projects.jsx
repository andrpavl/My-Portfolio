import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { projects } from "../../projects";

const Projects = () => {
	return (
		<>
			<h2 style={{ textAlign: "center" }}>Here is a list of my projects:</h2>
			<ProjectsList projects={projects} />
			<a
				style={{ fontSize: 20 }}
				href="https://github.com/andrpavl/My-Portfolio">
				... and HERE is a link to Github repository of this portfolio
			</a>
		</>
	);
};

export default Projects;
