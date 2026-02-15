import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Paper, TextField, InputAdornment, Chip, Stack, useTheme, Avatar } from '@mui/material';
import { bikes } from '../data/bikes';
import { Calendar, PenTool, CheckCircle, Search } from 'lucide-react';

const Logs = () => {
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBike, setFilterBike] = useState('All');

    // Flatten logs from all bikes for the master list
    const allLogs = bikes.flatMap(bike => {
        if (!bike.logs) return [];
        return bike.logs.map(log => ({ ...log, bikeName: bike.name, bikeId: bike.id }));
    }).sort((a, b) => new Date(b.date) - new Date(a.date));

    const filteredLogs = allLogs.filter(log => {
        if (!log) return false;
        const matchesSearch = log.activity.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBike = filterBike === 'All' || log.bikeName === filterBike;
        return matchesSearch && matchesBike;
    });

    const MotionPaper = motion.create(Paper);

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto' }} className="fade-in">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" fontWeight="bold">
                    Service & Maintenance Logs
                </Typography>
                <Chip
                    label="System Active"
                    color="success"
                    variant="outlined"
                    sx={{ bgcolor: 'rgba(34, 197, 94, 0.1)' }}
                />
            </Box>

            {/* Filters */}
            <Paper sx={{ p: 3, mb: 4, borderRadius: 2, border: `1px solid ${theme.palette.divider}` }} elevation={0}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'center', justifyContent: 'space-between' }}>

                    <TextField
                        placeholder="Search logs..."
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{ maxWidth: { md: 300 } }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search size={18} color={theme.palette.text.secondary} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', width: { xs: '100%', md: 'auto' }, pb: { xs: 1, md: 0 } }}>
                        <Chip
                            label="All Bikes"
                            clickable
                            color={filterBike === 'All' ? "primary" : "default"}
                            onClick={() => setFilterBike('All')}
                            variant={filterBike === 'All' ? "filled" : "outlined"}
                        />
                        {bikes.map(bike => (
                            <Chip
                                key={bike.id}
                                label={bike.name}
                                clickable
                                color={filterBike === bike.name ? "primary" : "default"}
                                onClick={() => setFilterBike(bike.name)}
                                variant={filterBike === bike.name ? "filled" : "outlined"}
                            />
                        ))}
                    </Stack>
                </Box>
            </Paper>

            {/* Logs List */}
            <Stack spacing={2}>
                {filteredLogs.length > 0 ? (
                    filteredLogs.map((log, index) => (
                        <MotionPaper
                            key={index}
                            elevation={0}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                border: `1px solid ${theme.palette.divider}`,
                                '&:hover': {
                                    borderColor: 'primary.main',
                                },
                                transition: 'border-color 0.2s',
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: log.type === 'service' ? 'rgba(59, 130, 246, 0.2)' :
                                                log.type === 'maintenance' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                                            color: log.type === 'service' ? '#60a5fa' :
                                                log.type === 'maintenance' ? '#fb923c' : '#4ade80',
                                        }}
                                    >
                                        {log.type === 'service' ? <PenTool size={20} /> :
                                            log.type === 'maintenance' ? <CheckCircle size={20} /> :
                                                <Calendar size={20} />}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6" fontWeight="600">
                                            {log.activity}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography component="span" color="primary.main" fontSize="inherit">{log.bikeName}</Typography>
                                            •
                                            <Typography component="span" fontSize="inherit" sx={{ textTransform: 'capitalize' }}>
                                                {log.type}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ textAlign: { xs: 'left', md: 'right' }, pl: { xs: 7, md: 0 } }}>
                                    <Chip label={log.date} size="small" sx={{ fontFamily: 'monospace', bgcolor: 'background.paper', border: `1px solid ${theme.palette.divider}` }} />
                                </Box>
                            </Box>
                        </MotionPaper>
                    ))
                ) : (
                    <Box sx={{ textAlign: 'center', py: 8, color: 'text.secondary' }}>
                        <Typography variant="body1">No logs found matching your criteria.</Typography>
                    </Box>
                )}
            </Stack>
        </Box>
    );
};

export default Logs;
