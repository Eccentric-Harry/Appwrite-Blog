import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appwriteService from '../appwrite/config';
import { Container, PostCard, Button } from '../components';
import rightArrowIcon from '../assets/right.png';
import appDescriptionImage from '../assets/home-1.png';

function Home() {
    const [posts, setPosts] = useState([]);
    const isAuthenticated = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (isAuthenticated) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        }
    }, [isAuthenticated]);

    return (
        <div className='w-full py-8 bg-gray-900'>
            <Container>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='p-2 w-full md:w-1/2 lg:w-1/2 text-white text-center'>
                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-oswald"> {/* Adjusted font sizes */}
                            Explore Our Modern Blog Platform!
                        </div>
                        <div className="text-xl md:text-2xl font-medium mb-4 font-oswald"> {/* Adjusted font sizes */}
                            This is the place where you can discover and share amazing stories.
                        </div>
                        <Link to="/add-post">
                            <Button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-flex items-center bg-blue-900">
                                Start Blogging
                                <img src={rightArrowIcon} alt="Right Arrow" className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                        <div className='py-4 '>
                        </div>
                        <div className="text-xl md:text-2xl font-medium mb-4 font-oswald"> {/* Adjusted font sizes */}
                            Wanna read what others wrote?
                        </div>
                        <Link to="/all-posts">
                            <Button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-flex items-center bg-green-900">
                                Explore Blogs
                                <img src={rightArrowIcon} alt="Right Arrow" className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                    </div>
                    <div className='p-2 w-full md:w-1/2 lg:w-1/2 flex justify-center items-center'>
                        <img src={appDescriptionImage} alt="App Description" className="max-w-full h-auto" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
