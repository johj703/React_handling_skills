import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=2863d495030043e9b67b28b25340bebf',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
