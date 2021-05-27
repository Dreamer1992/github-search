import { makeStyles } from '@material-ui/core/styles'

export const SearchInputStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    paddingW: {
        paddingLeft: '10px',
        paddingRight: '10px',
    },
}))
