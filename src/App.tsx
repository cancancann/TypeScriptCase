import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

interface Props {

}

const Search: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState('');
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.body.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => console.log(inputValue)}>Search</button>
      {filteredPosts.map((post) => (
        <Card key={post.id} body={post.body} />
      ))}
    </div>
  );
};

export default Search;
