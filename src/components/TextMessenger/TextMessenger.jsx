import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import text_thumbnail from '../../images/textthumbnail.jpg';

const TextMessenger = () => {
    return (
        <Box sx={{ pt: 8, px: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
                SMS Journal Buddy
            </Typography>
            
            <CardMedia
                component="img"
                height="300"
                image={text_thumbnail}
                alt="SMS Journal Buddy Project Thumbnail"
                sx={{
                    mb: 4,
                    borderRadius: 2,
                    width: '100%',
                    height: 'auto',
                    maxHeight: '300px',
                    objectFit: 'contain',
                }}
            />
            
            <Typography variant="h6" gutterBottom>
                Project Overview
            </Typography>
            <Typography paragraph>
                SMS Journal Buddy is a personalized SMS-based journaling bot designed to help users set daily goals
                and provide a platform for venting or reflecting on their day. By interacting with the bot via SMS, 
                users receive daily prompts and can reflect on their experiences in a simple, interactive way. 
                The project aimed to offer a convenient, digital journaling experience accessible directly through text messages.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Key Features
            </Typography>
            <ul>
                <li>
                    <Typography>SMS-based communication using Twilio, allowing users to interact with the journaling bot via text.</Typography>
                </li>
                <li>
                    <Typography>Daily goal setting and the ability to reflect or vent by responding to prompts through SMS.</Typography>
                </li>
                <li>
                    <Typography>Personalized journaling experience, offering a simple and interactive way to track thoughts and goals.</Typography>
                </li>
            </ul>

            <Typography variant="h6" gutterBottom>
                Technologies Used
            </Typography>
            <Typography paragraph>
                <strong>Frontend:</strong> Twilio API for SMS integration <br />
                <strong>Backend:</strong> Node.js, Express <br />
                <strong>Hosting:</strong> Glitch <br />
                <strong>Additional Tools:</strong> JavaScript, SMS-based communication
            </Typography>

            <Typography variant="h6" gutterBottom>
                Implementation Highlights
            </Typography>
            <Typography paragraph>
                The project is powered by Twilio for SMS communication, enabling users to text their responses. 
                The backend, built with Node.js and Express, handles SMS requests and stores daily prompts. 
                Initially, we considered using MongoDB for data storage but opted for a more efficient local storage method. 
                A unique challenge we faced was maintaining persistent data across interactions without relying on sessions, which led to creative solutions.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Challenges We Faced
            </Typography>
            <Typography paragraph>
                - Two teammates were new to JavaScript, so the project doubled as a tutoring session.
                <br />
                - Initially planned to use MongoDB, but it was more efficient to store data locally.
                <br />
                - Figuring out how to manage persistent data without using sessions was a significant design challenge.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Accomplishments We're Proud Of
            </Typography>
            <Typography paragraph>
                We're proud that SMS Journal Buddy works effectively, allowing users to engage with their journaling prompts 
                and track their daily goals and reflections via SMS.
            </Typography>

            <Typography variant="h6" gutterBottom>
                What We Learned
            </Typography>
            <Typography paragraph>
                We gained hands-on experience working with Twilio for SMS integration, honed our skills in JavaScript, 
                and deepened our understanding of Express and Node.js fundamentals. The project also taught us how 
                to store and manage user data efficiently and create an interactive, text-based application.
            </Typography>

            <Box mt={4}>
                <Button variant="contained" color="primary" href="/">
                    Back to Projects
                </Button>
            </Box>
        </Box>
    );
};

export default TextMessenger;
