import './App.css';

import { get, put } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import Controls from './components/Controls';
import { submitContext } from './constants';
import { useCallback } from 'react';

const SubmitProvider = submitContext.Provider;

function App() {
  const { mutate, isLoading: isMutating } = useMutation((values) => put('/camview/ctrl.json', values));

  const { isLoading, data, isSuccess, refetch } = useQuery('controls', () => get('/camview/ctrl.json').then(({ data }) => data), {
    refetchInterval: 1000,
    enabled: !isMutating,
  });

  const queryClient = useQueryClient();

  const handleChange = useCallback((name, ctrlValue) => {
    let newData = data.device.map(d => d.ctrlName === name ? { ...d, ctrlValue } : d);

    queryClient.setQueryData('controls', { device: newData });

    mutate({ device: newData }, {
      onError: () => {
        queryClient.setQueryData('controls', data);
      },
      onSuccess: () => refetch({ cancelRefetch : true }),
    });
  }, [mutate, data, queryClient, refetch]);

  return (
    <div className="App">
        {isLoading && (
      <header className="App-header">
          <p>
            Loading controls...
          </p>
      </header>
        )}

        {isSuccess && (
          <SubmitProvider value={{ onChange: handleChange }}>
            <Controls data={data.device} />
          </SubmitProvider>
        )}
    </div>
  );
}

export default App;
