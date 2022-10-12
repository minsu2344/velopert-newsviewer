import React, { useState } from 'react'
import axios from '../node_modules/axios/index';

function App() {
  const [data, setData] = useState(null);
  async function onClick() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setData(res.data);
    }
    catch(e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  )
}

export default App