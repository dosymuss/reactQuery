import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry:3,
      retryDelay:1000,
    }
    //! это условие будет делать так чтоб не отправлялся повторный запрос при переходе от сайта на другую страницу и обратно
    // ? парматеры которые тоже используются в проекте
    // retry: 3, // Количество попыток повтора запроса при ошибке
    // * будет выполняться запросы до тех пор пока не будет удачный исход
    // retryDelay: 1000, // Задержка перед повторной попыткой в миллисекундах
    // * этот параметр указывает через какое время отправить запрос повторно
    // refetchOnWindowFocus: false, // Повторный запрос при фокусе окна браузера

  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
