import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Avatar, useTheme, IconButton, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import BikeCard from './BikeCard';
import ServiceSchedule from './ServiceSchedule';
import { bikes } from '../data/bikes';
import { Settings, Plus, Cuboid as Cube } from 'lucide-react';

const Dashboard = () => {
    const theme = useTheme();
    const [logs] = useState([
        { date: "20 Apr 2024", activity: "Ride to Lonavala" },
        { date: "19 Apr 2024", activity: "Oil Change Done" },
        { date: "18 Apr 2024", activity: "Bike Wash" },
    ]);

    const MotionPaper = motion.create(Paper);

    return (
        <Box className="fade-in" sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {/* Bike Cards Section */}
                {bikes.map(bike => (
                    <Grid size={{ xs: 12, md: 4 }} key={bike.id}>
                        <BikeCard bike={bike} />
                    </Grid>
                ))}

                {/* Garage Stats Card */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <MotionPaper
                        elevation={0}
                        sx={{
                            p: 3,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            bgcolor: 'background.paper',
                            borderRadius: 2,
                            border: `1px solid ${theme.palette.divider}`,
                        }}
                        whileHover={{ y: -5 }}
                    >
                        <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'rgba(239, 68, 68, 0.2)', mb: 2 }}>
                            <Settings size={40} color={theme.palette.primary.main} />
                        </Box>
                        <Typography variant="h6" gutterBottom>Garage Stats</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            Total Bikes: {bikes.length}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Active Alerts: 1
                        </Typography>
                    </MotionPaper>
                </Grid>

                {/* Row 2 */}

                {/* Daily Log */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 3, height: '100%', borderRadius: 2, border: `1px solid ${theme.palette.divider}` }} elevation={0}>
                        <Typography variant="h6" gutterBottom>Daily Log</Typography>
                        <Button
                            variant="contained"
                            fullWidth
                            startIcon={<Plus size={18} />}
                            sx={{ mb: 3 }}
                        >
                            Add Today's Log
                        </Button>
                        <Box>
                            {logs.map((log, idx) => (
                                <Box key={idx} sx={{ mb: 1, color: 'text.secondary', display: 'flex', gap: 1 }}>
                                    <Typography variant="body2" component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                                        - {log.date}:
                                    </Typography>
                                    <Typography variant="body2" component="span">
                                        {log.activity}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>

                {/* Upcoming Service */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <ServiceSchedule bikes={bikes} />
                </Grid>

                {/* 3D Viewer Mock */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            height: '100%',
                            minHeight: 300,
                            borderRadius: 2,
                            cursor: 'pointer',
                            bgcolor: 'black',
                        }}
                        elevation={0}
                    >
                        <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 10 }}>
                            <Typography variant="h6">3D Bike Viewer</Typography>
                        </Box>
                        <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 10, bgcolor: 'rgba(0,0,0,0.5)', p: 0.5, borderRadius: 1 }}>
                            <Cube size={16} color="white" />
                        </Box>

                        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
                            <motion.img
                                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop"
                                alt="3D View"
                                style={{
                                    width: '120%',
                                    maxWidth: 'none',
                                    transform: 'scale(1.2)',
                                }}
                                whileHover={{ scale: 1.3 }}
                                transition={{ duration: 0.5 }}
                            />
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: 16, width: '100%', textAlign: 'center' }}>
                            <Typography variant="caption" color="text.secondary">Rotate & Zoom &gt;</Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Row 3 - Expense Summary */}
                <Grid size={{ xs: 12, md: 12 }}>
                    <Paper sx={{ p: 3, borderRadius: 2, border: `1px solid ${theme.palette.divider}` }} elevation={0}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Typography variant="h6">Expense Summary</Typography>
                            <Typography variant="h6">
                                Total Spent: <Typography component="span" fontWeight="bold">₹12,500</Typography>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 150 }}>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, i) => (
                                <Box key={m} sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 1, height: '100%' }}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: `${20 + Math.random() * 80}%`,
                                            bgcolor: i % 2 === 0 ? 'primary.main' : '#3b82f6',
                                            borderRadius: '4px 4px 0 0',
                                            opacity: 0.8,
                                        }}
                                    />
                                    <Typography variant="caption" color="text.secondary">{m}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
