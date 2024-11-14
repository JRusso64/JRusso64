import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import forum_thumbnail from '../../images/forum.jpeg';

const ForumProject = () => {
    return (
        <Box sx={{ pt: 8, px: 3 }}>
            <Typography variant="h4" gutterBottom sx={{textAlign:'center'}}>
                Forum Project
            </Typography>
            
            {/* Project Image */}
            <CardMedia
                component="img"
                height="300"
                image={forum_thumbnail}
                alt="Forum Project Thumbnail"
                sx={{ mb: 4,
                    borderRadius: 2,
                    width: '100%',
                    height: 'auto',
                    maxHeight: '300px',
                    objectFit: 'contain'
                }}
            />
            
            {/* Project Description */}
            <Typography variant="h6" gutterBottom>
                Project Overview
            </Typography>
            <Typography paragraph>
                This forum application allows users to register, create posts, and interact in discussion threads. 
                Built with a MERN stack, the project utilizes React for the frontend, Node.js and Express for the 
                backend, and MongoDB as the database. Key features include secure authentication, real-time post 
                interactions, and an intuitive user interface.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Key Features
            </Typography>
            <ul>
                <li>
                    <Typography>Authentication and Authorization using PassportJS to secure user data and session management.</Typography>
                </li>
                <li>
                    <Typography>CRUD operations for posts, replies, and user profiles, allowing users to create, edit, and delete their content.</Typography>
                </li>
                <li>
                    <Typography>Responsive design with Bootstrap, ensuring compatibility across devices.</Typography>
                </li>
                <li>
                    <Typography>Error handling and data validation in the backend using Express middleware, ensuring secure and validated interactions.</Typography>
                </li>
            </ul>

            <Typography variant="h6" gutterBottom>
                Technologies Used
            </Typography>
            <Typography paragraph>
                <strong>Frontend:</strong> React, Bootstrap <br />
                <strong>Backend:</strong> Node.js, Express, PassportJS <br />
                <strong>Database:</strong> MongoDB Atlas, Mongoose <br />
                <strong>Additional Tools:</strong> HTML/CSS
            </Typography>

            <Typography variant="h6" gutterBottom>
                Implementation Highlights
            </Typography>
            <Typography paragraph>
                The authentication flow was implemented with PassportJS, including secure password hashing with bcrypt 
                and session management for user access. API endpoints in Express handle user actions, while data 
                validation ensures the integrity of the database. Error handling was applied throughout the app to 
                manage issues gracefully, providing feedback to users. Bootstrap customization enhanced the visual 
                experience, providing a user-friendly, responsive layout.
            </Typography>

            {/* Add a button to navigate back to the main page */}
            <Box mt={4}>
                <Button variant="contained" color="primary" href="/">
                    Back to Projects
                </Button>
            </Box>
        </Box>
    );
};

export default ForumProject;
