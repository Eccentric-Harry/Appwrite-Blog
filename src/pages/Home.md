import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard, Button } from '../components'; // Import Button component
import appDescriptionImage from '../assets/home-1.png'; // Updated image import
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import rightArrowIcon from '../assets/right.png'; // Import right arrow SVG icon

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className='w-full py-8 bg-gray-900'> {/* Updated background color */}
            <Container>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='p-2 w-full md:w-1/2 lg:w-1/2 text-white text-center'> {/* Centered text with white color */}
                        <div className="text-7xl font-bold mb-4"> {/* Large and bold font */}
                            Explore Our Modern Blog Platform!
                        </div>
                        <div className="text-2xl font-medium mb-4">
                            This is the place where you can discover and share amazing stories.
                        </div>
                        {/* Button to navigate to the login page with the right arrow icon */}
                        <Link to="/login">
                            <Button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-flex items-center bg-blue-900">
                                Start Blogging
                                <img src={rightArrowIcon} alt="Right Arrow" className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                    </div>
                    <div className='p-2 w-full md:w-1/2 lg:w-1/2 flex justify-center items-center'> {/* Adding the image to the right half */}
                        <img src={appDescriptionImage} alt="App Description" className="max-w-full h-auto" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
