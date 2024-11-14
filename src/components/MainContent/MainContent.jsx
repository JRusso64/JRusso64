import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import forum_thumbnail from '../../images/forum.jpeg';
import aslingo_thumbnail from '../../images/aslingothumbnail.JPG';
import text_thumbnail from '../../images/textthumbnail.jpg';

const projects = [
    { id: 1, title: 'Forum', image: forum_thumbnail, link: '/forum-project' },
    { id: 2, title: 'Sign Language AI', image: aslingo_thumbnail, link: '/aslingo' },
    { id: 3, title: 'Personal Messenger', image: text_thumbnail, link: '/textmessenger' }
];

const MainContent = () => {
    return (
        <Box sx={{ pt: 8 }}> {/* Added padding-top to avoid overlap */}
            {/* Github and Resume Links */}
            <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Link href="https://github.com/jrusso64" target="_blank" underline="none">
                            <Button variant="contained" fullWidth sx={{backgroundColor: "white"}}>
                                Github
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={6}>
                        <Link href="/path-to-resume.pdf" target="_blank" underline="none">
                            <Button variant="contained" fullWidth sx={{backgroundColor: "white"}}>
                                Resume
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="h4" gutterBottom>Top Projects</Typography>
            <Grid container spacing={2}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card>
                            <CardActionArea href={project.link}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: '100%',
                                        height: {xs: 'auto', sm: 140},
                                        objectFit: 'cover'
                                    }}
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography variant="h6">{project.title}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <Box sx={{ p: 1 }}>
                                <Button variant="contained" href={project.link} sx={{backgroundColor: "white"}}>
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
