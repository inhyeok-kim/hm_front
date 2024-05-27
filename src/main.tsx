import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mock/worker.ts'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@mui/material'
import { theme } from './utils/style/theme.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


if (import.meta.env.MODE === 'mock') {
  await worker.start();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename='/'>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  </QueryClientProvider>
)