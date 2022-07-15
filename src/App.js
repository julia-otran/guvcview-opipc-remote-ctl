import { useQuery, useMutation, useQueryClient } from 'react-query';
import { get, put } from 'axios';
import { useCallback } from 'react';

import './App.css';
import Controls from './components/Controls';
import { submitContext } from './constants';

const SubmitProvider = submitContext.Provider;

function App() {
  const { mutate, isLoading: isMutating } = useMutation((values) => put('/guvcview/ctrl.json', values));

  const { isLoading, data, isSuccess, refetch } = useQuery('controls', () => get('/guvcview/ctrl.json').then(({ data }) => data), {
    refetchInterval: 1000,
    enabled: !isMutating,
  });

  const queryClient = useQueryClient();

  const handleChange = useCallback((name, ctrlValue) => {
    let newData = data.map(d => d.ctrlName === name ? { ...d, ctrlValue } : d);

    queryClient.setQueryData('controls', newData);

    mutate(newData, {
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
            <Controls data={data} />
          </SubmitProvider>
        )}
    </div>
  );
}

export default App;
