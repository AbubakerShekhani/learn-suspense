import React, { Suspense} from 'react';
import PostList from './PostList';
import createResource from './resource';
import './App.css';

const resource = createResource()

function App() {


  return (
    <div>
      <h1>Reddit Posts</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
