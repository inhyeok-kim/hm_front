import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mock/worker.ts'
import { RecoilRoot } from 'recoil'


if (import.meta.env.MODE === 'mock') {
  await worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename='/'>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
)
