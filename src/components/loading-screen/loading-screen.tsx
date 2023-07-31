import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { styles } from './loading-screen.styles'
import { ReactElement } from 'react'

export const LoadingScreen = (): ReactElement<null> => {
  return (
    <Box sx={styles.container}>
      <LinearProgress color="inherit" sx={styles.linearProgress} />
    </Box>
  )
}
