import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import aslingo_thumbnail from '../../images/aslingothumbnail.JPG';

const SignLanguageProject = () => {
    return (
        <Box sx={{ pt: 8, px: 3 }}>
            <Typography variant="h4" gutterBottom sx={{textAlign: 'center'}}>
                AI Sign Language Teaching Tool
            </Typography>
            
            {/* Project Image */}
            <CardMedia
                component="img"
                image={aslingo_thumbnail}
                alt="AI Sign Language Project Thumbnail"
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
                The AI Sign Language Teaching Tool is an innovative project developed for the HackRU hackathon hosted by Rutgers University, where my team won first place. The tool leverages computer vision and machine learning to recognize American Sign Language (ASL) gestures in real-time. It helps users learn and practice ASL by providing instant feedback based on their hand movements.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Key Features
            </Typography>
            <ul>
                <li>
                    <Typography>Real-time Gesture Recognition using computer vision to identify ASL gestures.</Typography>
                </li>
                <li>
                    <Typography>Interactive feedback that helps users learn and perfect their sign language skills.</Typography>
                </li>
                <li>
                    <Typography>Intuitive and user-friendly graphical interface developed with PyQt5.</Typography>
                </li>
            </ul>

            <Typography variant="h6" gutterBottom>
                Technologies Used
            </Typography>
            <Typography paragraph>
                <strong>Machine Learning and Computer Vision:</strong> OpenCV, Google Teachable Machine <br />
                <strong>Programming Language:</strong> Python <br />
                <strong>GUI Framework:</strong> PyQt5 <br />
                <strong>Data Processing:</strong> NumPy
            </Typography>

            <Typography variant="h6" gutterBottom>
                Implementation Highlights
            </Typography>
            <Typography paragraph>
                The tool utilizes OpenCV for real-time image capture and processing. The machine learning model for gesture recognition was trained using Google's Teachable Machine. It can detect various ASL gestures and provide immediate feedback to the user. The graphical interface, built with PyQt5, allows users to interact with the system in a straightforward and engaging way. NumPy was used for numerical operations in image processing and model calculations, ensuring smooth functionality during real-time recognition.
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

export default SignLanguageProject;
