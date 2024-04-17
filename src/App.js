import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import { createTodo, getWeather } from './api/api';

const todoId = 1
// axios.get("https://jsonplaceholder.typicode.com/todos/1")

function App() {
  const [title, setTitle] = useState("")

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: getWeather,
    select: (data) => data,
    placeholderData:keepPreviousData
    // ? это нужно для плавной прогрузки пагинации на странице
    
    
    // ! эта запись нужна для преобразования данных после
  })

  const {mutate, isSuccess} = useMutation({
    mutationKey:["create todo"],
    mutationFn: ()=> createTodo(title),
  })
  //! useMutation нужен для отправки данных на базу, и ими можно управлять с помощью isSuccess





  // const queryClient = useQueryClient()

  //? useQuery({ queryKey: ['todos', { status, page }], ... })
  // ? queryKey это ключ запроса, чтоб не запутаться в них, параметры могут меняться, в данном случе это статус и пагинация страницы

  useEffect(() => {
    console.log(isLoading);
    console.log(data);

    if(isSuccess){
      alert("ok")
      refetch()
    }
  }, [isLoading, isSuccess])

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(title);
    mutate()
  }


  if (error) {
    return <p style={{ color: "red" }}>Error</p>
  }
  return (
    <div className="App">
      {/* <button onClick={()=>{
        // refetch()
        queryClient.invalidateQueries(["todos"])
        // второй метод для обновления данных
        // удобен тем что можно получить его на любой странице, без пропсов
        // обязательно надо указать ключ, какие именно данные нужно обновить в кеше
      }}>
        refetch
      </button> */}
      {/* refetch нам нужен для повторной отправки запроса, и изменения знаний */}
      <div>
        <h1>Todos:</h1>
        <ol>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))
          }
        </ol>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <button>submit</button>
        </form>

      </div>
    </div>
  );
}

export default App;
