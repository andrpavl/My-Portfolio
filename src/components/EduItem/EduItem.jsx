export const EduItem = ({ companyName, companyLink, date, occup }) => {
	return (
		<>
			<li>
				<a href={companyLink} target="blank">
					<h4>{companyName}</h4>
				</a>
				<p>{date}</p>
				<p>{occup}</p>
			</li>
			<hr />
		</>
	);
};
