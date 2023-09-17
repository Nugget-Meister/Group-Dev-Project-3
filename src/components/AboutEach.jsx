/* eslint-disable react/prop-types */
import './AboutEach.css';

const AboutEach = ({ fellow }) => {
	const { name, profilePic, github, linkedin } = fellow;

	return (
		<li className='fellow'>
			<img src={profilePic} alt={name} />
			<div>
				<h3>{name}</h3>
			</div>
		</li>
	);
};

export default AboutEach;
