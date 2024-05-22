import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { worker } from './mock/worker.ts'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@mui/material'
import { theme } from './utils/style/theme.ts'


if (import.meta.env.MODE === 'mock') {
  await worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
)
