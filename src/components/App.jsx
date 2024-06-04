import { Route, Routes } from "react-router-dom";
// import Projects from "./pages/Projects/Projects";
// import { SharedLayout } from "./components/SharedLayout/SharedLayout";
// import { About } from "./pages/About/About";
// import Docs from "./pages/Docs/Docs";
import Home from "pages/Home/Home";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Projects from "pages/Projects/Projects";
import { About } from "pages/About/About";
import Docs from "pages/Docs/Docs";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path="projects" element={<Projects />} />
				<Route path="about" element={<About />} />
				<Route path="docs" element={<Docs />} />
			</Route>
		</Routes>
	);
}

export default App;
