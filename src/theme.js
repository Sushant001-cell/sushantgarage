import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ef4444', // Red 500
            light: '#f87171',
            dark: '#dc2626',
            contrastText: '#ffffff',
        },
        background: {
            default: '#0f172a', // Slate 900
            paper: '#1e293b', // Slate 800
        },
        text: {
            primary: '#f8fafc', // Slate 50
            secondary: '#94a3b8', // Slate 400
        },
        divider: '#334155', // Slate 700
    },
    typography: {
        fontFamily: '"Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 600,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // Remove default gradient in dark mode
                },
                rounded: {
                    borderRadius: '0.75rem',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '0.75rem',
                    border: '1px solid #334155',
                },
            },
        },
    },
});

export default theme;
