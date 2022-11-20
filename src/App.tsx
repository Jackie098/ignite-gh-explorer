import { useState } from 'react';
import { RepositoryList } from './components/RepositoryList';

import './styles/global.scss';

export function App() {
  const [count, setCount] = useState(0);

  return (<>
    <RepositoryList />
  </>)
}
