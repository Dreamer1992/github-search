import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import {searchAPI} from "../../api/api";
import useDebounce from "../../hooks/use-debounce";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {SearchInputStyles} from "./SearchInputStyles";

const SearchInput = ({updateProjects}) => {
    const classes = SearchInputStyles();

    // Search term
    const [searchTerm, setSearchTerm] = useState('');
    // Searching status (whether there is pending API request)
    const [isSearching, setIsSearching] = useState(false);
    const [isResults, setIsResult] = useState(false);
    // As a result the API call should only fire once user stops typing
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            if (debouncedSearchTerm && debouncedSearchTerm.length >= 3) {
                setIsSearching(true);

                searchAPI.getSearch(debouncedSearchTerm).then(res => {
                    setIsSearching(false);
                    updateProjects(res.items);

                    res.total_count ? setIsResult(false) : setIsResult(true)
                });
            } else {
                updateProjects([]);
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search"
                    inputProps={{'aria-label': 'search'}}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </Paper>

            {isSearching && (
                <Container maxWidth="md" className={classes.paddingW}>
                    <Grid>
                        <Typography variant="h6" color="textPrimary">
                            Searching...
                        </Typography>
                    </Grid>
                </Container>
            )}

            {isResults && (
                <Container maxWidth="md" className={classes.paddingW}>
                    <Grid>
                        <Typography variant="h6" color="textPrimary">
                            No results
                        </Typography>
                    </Grid>
                </Container>
            )}

            {(debouncedSearchTerm.length < 3) && (
                <Container maxWidth="md" className={classes.paddingW}>
                    <Grid>
                        <Typography variant="h6" color="textPrimary">
                            The minimum number of characters is 3
                        </Typography>
                    </Grid>
                </Container>
            )}
        </>
    );
}

export default SearchInput
