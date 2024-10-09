import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { productRepo } from '../repo';
import { HomePage } from '../pages';

const App = () => {
  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
              retry: 0,
            },
          },
        })
      }
    >
      <HomePage />
    </QueryClientProvider>
  );
};

export { App };
