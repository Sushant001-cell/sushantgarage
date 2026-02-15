import React from 'react';
import { Typography, Chip, Box, useTheme, Divider, Paper } from '@mui/material';

const ServiceSchedule = ({ bikes }) => {
    const theme = useTheme();

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                height: '100%',
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h6" gutterBottom>Upcoming Service</Typography>

            {bikes.map((bike, index) => {
                // Mock calculation logic as placeholder
                const isUrgent = bike.oilChangeDue < 500;

                return (
                    <Box key={bike.id}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    {bike.name}
                                </Typography>
                                <Typography variant="caption" display="block" color="text.secondary">
                                    Next Service Due: <Typography component="span" fontWeight="bold" color="text.primary">{bike.nextServiceDue} KM</Typography>
                                </Typography>
                                <Typography variant="caption" display="block" color="text.secondary">
                                    Oil Change in: <Typography component="span" fontWeight="bold" color="text.primary">{bike.oilChangeDue} KM</Typography>
                                </Typography>
                            </Box>

                            <Chip
                                label={isUrgent ? "Check Now" : "Good"}
                                size="small"
                                color={isUrgent ? "warning" : "success"}
                                variant="outlined"
                                sx={{ borderRadius: 1 }}
                            />
                        </Box>
                        {index < bikes.length - 1 && <Divider sx={{ mb: 2 }} />}
                    </Box>
                );
            })}
        </Paper>
    );
};

export default ServiceSchedule;
