import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Avatar, useTheme } from '@mui/material';
import { LayoutDashboard, FileText, Banknote, Cuboid as Cube } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const theme = useTheme();
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
        { name: 'Logs', icon: <FileText size={20} />, path: '/logs' },
        { name: 'Expenses', icon: <Banknote size={20} />, path: '/expenses' },
        { name: '3D View', icon: <Cube size={20} />, path: '/3d-view' },
    ];

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: 'rgba(30, 41, 59, 0.7)',
                backdropFilter: 'blur(12px)',
                borderBottom: `1px solid ${theme.palette.divider}`,
                zIndex: theme.zIndex.appBar,
                top: 0,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', minHeight: '4rem' }}>
                {/* Logo Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{
                        width: 36,
                        height: 36,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                        AG
                    </Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        Ayush Garage Pro
                    </Typography>
                </Box>

                {/* Navigation Links */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Button
                                key={item.name}
                                component={NavLink}
                                to={item.path}
                                startIcon={item.icon}
                                sx={{
                                    color: isActive ? 'primary.main' : 'text.secondary',
                                    fontWeight: isActive ? 600 : 400,
                                    textTransform: 'none',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                                        color: isActive ? 'primary.main' : 'text.primary',
                                    },
                                }}
                            >
                                {item.name}
                            </Button>
                        );
                    })}
                </Box>

                {/* User Profile */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                            Welcome,
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1 }}>
                            Ayush
                        </Typography>
                    </Box>
                    <Avatar
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ayush"
                        alt="Ayush"
                        sx={{ width: 40, height: 40, border: '2px solid', borderColor: 'divider' }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
