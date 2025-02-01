import About from './Components/About'
import Blogs from './Components/Blogs'
import Clients from './Components/Clients'
import Explore from './Components/Explore'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Video from './Components/Video'
import WhyChoose from './Components/WhyChoose'

export default function Home() {
	return (
		<div className='overflow-hidden'>
			<Navbar />
			<Hero />
			<Explore />
			<About />
			<WhyChoose />
			<Video />
			<Blogs />
			<Clients />
		</div>
	)
}
