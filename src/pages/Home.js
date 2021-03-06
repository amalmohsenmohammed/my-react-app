import React from 'react'
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import {Link} from "react-router-dom";
import Services from '../components/Services';
import { RoomProvider } from '../context';
import FeaturedRooms from '../components/FeaturedRooms';
function Home() {
    return (
        <div>
        <Hero>
            <Banner title="luxurious rooms"subtitle="deluxe rooms startung at $299">
            <Link to="/rooms" className="btn-primary">Our rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
       
        </div>
    )
}

export default Home
