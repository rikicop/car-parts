## ReactQuery

[ReactQuery](https://react-query.tanstack.com/) is a library for fetching, caching and updating data in React applications. It is a great tool for fetching data from the backend and updating the UI when the data changes.

### Fetching data

Great Tutorial [ReactQuery](https://youtu.be/46vKqPlTW2w)

```tsx
import { useQuery } from 'react-query';
import { getTodos } from '../api';


const Todos = () => {
  const { data, isLoading, error } = useQuery('todos', getTodos);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

### Updating data

```tsx
import { useMutation } from 'react-query';
import { addTodo } from '../api';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [mutate, { isLoading, error }] = useMutation(addTodo, {
    onSuccess: () => {
      queryCache.invalidateQueries('todos');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </form>
  );
};
```
