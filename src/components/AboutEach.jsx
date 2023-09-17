/* eslint-disable react/prop-types */
import './AboutEach.css';
import { Link } from 'react-router-dom';
import GitHubPic from '../assets/github.png';
import LinkedInPic from '../assets/linkedin.png';

const AboutEach = ({ fellow }) => {
	const { name, profilePic, github, linkedin } = fellow;

	return (
		<li className='fellow'>
			<img className='profile-img' src={profilePic} alt={name} />
			<div>
				<h3>{name}</h3>
				<section className='profile-links'>
					<Link to={github}>
						<img className='profile-link' src={GitHubPic} alt='GitHub' />
					</Link>
					<Link to={linkedin}>
						<img className='profile-link' src={LinkedInPic} alt='GitHub' />
					</Link>
				</section>
			</div>
		</li>
	);
};

export default AboutEach;
