import { useQuery, useMutation, useQueryClient } from 'react-query';
import { get, put } from 'axios';
import { useCallback } from 'react';

import './App.css';
import Controls from './components/Controls';
import { submitContext } from './constants';

const SubmitProvider = submitContext.Provider;

function App() {
  const { isLoading, data, isSuccess } = useQuery('controls', () => get('/guvcview/ctrl.json').then(({ data }) => data));

  const { mutate } = useMutation((values) => put('/guvcview/ctrl.json', values));

  const queryClient = useQueryClient();

  const handleChange = useCallback((name, ctrlValue) => {
    let newData = data.map(d => d.ctrlName === name ? { ...d, ctrlValue } : d);

    queryClient.setQueryData('controls', newData);

    mutate(newData, { onError: () => {
      queryClient.setQueryData('controls', data);
    }, });
  }, [mutate, data, queryClient]);

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
