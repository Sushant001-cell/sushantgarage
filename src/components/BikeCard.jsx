import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardActions, Typography, Button, Box, useTheme } from '@mui/material';
import { ArrowRight } from 'lucide-react';

const BikeCard = ({ bike }) => {
    const theme = useTheme();
    const MotionCard = motion.create(Card);

    return (
        <MotionCard
            elevation={0}
            whileHover={{ y: -5 }}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 2, p: 3 }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                    {bike.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Total KM: <Typography component="span" fontWeight="bold" color="text.primary">{bike.totalKm.toLocaleString()}</Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Last Service: <Typography component="span" color="text.primary">{bike.lastService}</Typography>
                </Typography>
            </Box>

            <CardActions sx={{ position: 'relative', zIndex: 2, p: 3, pt: 0 }}>
                <Button
                    variant="contained"
                    size="small"
                    endIcon={<ArrowRight size={16} />}
                    sx={{ borderRadius: 1 }}
                >
                    View Details
                </Button>
            </CardActions>

            {/* Decorative Bike Image */}
            <Box
                component="img"
                src={bike.image}
                alt={bike.name}
                sx={{
                    position: 'absolute',
                    right: -20,
                    bottom: -20,
                    width: 200,
                    height: 150,
                    opacity: 0.6,
                    transform: 'rotate(-5deg)',
                    zIndex: 1,
                    pointerEvents: 'none',
                    objectFit: 'cover',
                    maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
                }}
            />

            {/* Gradient Overlay */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(90deg, ${theme.palette.background.paper} 40%, rgba(30,41,59,0.4) 100%)`,
                zIndex: 0,
                opacity: 0.8,
            }} />
        </MotionCard>
    );
};

export default BikeCard;
