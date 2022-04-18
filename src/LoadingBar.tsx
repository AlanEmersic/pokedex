

import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

export default function LoadingBar() {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }, []);

  return (
    <CircularProgressWithLabel value={progress} />
  )
}
