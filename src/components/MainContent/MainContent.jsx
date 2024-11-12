import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import forum_image from '../../images/forum.jpeg'

const projects = [
    { id: 1, title: 'Project One', image: forum_image, link: '/forum-project' },
    { id: 2, title: 'Project Two', image: 'https://via.placeholder.com/150', link: '/project-two' },
    { id: 3, title: 'Project Three', image: 'https://via.placeholder.com/150', link: '/project-three' }
];

const MainContent = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>Top Projects</Typography>
            
            <Grid container spacing={2}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card>
                            <CardActionArea href={project.link}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography variant="h6">{project.title}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <Box sx={{ p: 1 }}>
                                <Button variant="contained" color="primary" href={project.link}>
                                    Learn More
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>Smaller Projects</Typography>
            {/* Repeat similar structure for smaller projects if needed */}
        </Box>
    );
};

export default MainContent;
