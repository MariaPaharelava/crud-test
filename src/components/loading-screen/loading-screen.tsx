import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export const LoadingScreen = () => {
  return (
    <Box
      sx={{
        px: 5,
        width: 1,
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        style: {
          minWidth: '100%',
          height: '100vh',
        },
      }}
    >
      <LinearProgress color="inherit" sx={{ width: 1, maxWidth: 360 }} />
    </Box>
  )
}
