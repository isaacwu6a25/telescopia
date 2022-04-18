import Hero from '../Hero';
import Background from "../Background";
import Description from "../Description";
import AboutUs from "../AboutUs";
import PhotoGallery from '../PhotoGallery';

function Home() {
    return (
		<div style = {{height:'500vh', maxWidth: "100vw"}}>
            <Background/>
			<Hero />
			<Description/>
			<AboutUs/>
			<PhotoGallery/>
		</div>
	);
}

export default Home;