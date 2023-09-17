import fellowsData from '../../data/fellows.json';
import AboutEach from './AboutEach';
import './About.css';
import { v4 as uuidv4 } from 'uuid';

const About = () => {
	const fellows = fellowsData;

	return (
		<div className='about'>
			<h2>About Us</h2>
			<ul className='fellows'>
				{fellows.map((fellow) => (
					<AboutEach key={uuidv4()} fellow={fellow} />
				))}
			</ul>
		</div>
	);
};

export default About;
