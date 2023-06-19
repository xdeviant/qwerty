
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { RouteList } from './routes';

const queryClient = new QueryClient();

export const App = () => {  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
