import { useState, useEffect } from 'react';

import Loader from './Loader';
import QuoteList from './QuoteList';

function Quote() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = () => {
      setLoading(true);
      fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': '24Ni/2z4GfMEfFJQvosuog==iwXy9IrHnwOQQ3wv',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setLoading(false);
          setData(response);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    };

    fetchUsers();
  }, []);

  return (
    <div className="quote">
      <h4>{error}</h4>
      {loading ? <Loader /> : <QuoteList data={data} />}
    </div>
  );
}

export default Quote;
