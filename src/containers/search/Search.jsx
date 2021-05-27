import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SearchInput from '../../components/SearchInput/SearchInput'
import CardMedia from '@material-ui/core/CardMedia'
import { searchStyles } from './SearchStyles'
import { useSelector } from 'react-redux'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Search on GitHub
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const Search = () => {
    const { projects } = useSelector((state) => state.search)
    const classes = searchStyles()

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Search on GitHub
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main */}
            <Container maxWidth="md" component="main" className={classes.mainContent}>
                <Grid className={classes.titleContent}>
                    <Typography variant="h4" align="center" color="textPrimary" component="p">
                        Search on GitHub
                    </Typography>
                </Grid>

                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <SearchInput />
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={project.owner.avatar_url}
                                    title="Image"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.name}
                                    </Typography>
                                    <Typography gutterBottom>{project.description}</Typography>
                                    <Typography color="textSecondary">
                                        Stargazers count: {project.stargazers_count}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Watchers count: {project.watchers_count}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href={project.html_url} target="_blank">
                                        View
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* End main */}

            {/* Footer */}
            <Container maxWidth="md" component="footer">
                <Box className={classes.footer}>
                    <Copyright />
                </Box>
            </Container>
            {/* End footer */}
        </React.Fragment>
    )
}

export default Search
