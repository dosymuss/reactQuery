//  ? здесь предоставлен пример 2 запросов, то есть с поммощью useQuery можно отправлять параллельные запросы

// import { useQuery } from 'react-query';

// const fetchUserData = async () => {
//   const response = await fetch('/api/user');
//   const data = await response.json();
//   return data;
// };

// const fetchPostsData = async () => {
//   const response = await fetch('/api/posts');
//   const data = await response.json();
//   return data;
// };

// const MyComponent = () => {
//   const { data: userData, error: userError, isLoading: userLoading } = useQuery({
//     queryKey: ['user'],
//     queryFn: fetchUserData,
//   });

//   const { data: postsData, error: postsError, isLoading: postsLoading } = useQuery({
//     queryKey: ['posts'],
//     queryFn: fetchPostsData,
//   });

//   if (userLoading || postsLoading) {
//     return <div>Loading...</div>;
//   }

//   if (userError || postsError) {
//     return <div>Error: {userError?.message || postsError?.message}</div>;
//   }

//   // Используйте userData и postsData для отображения данных в компоненте
//   return (
//     <div>
//       <h2>User Data</h2>
//       <pre>{JSON.stringify(userData, null, 2)}</pre>

//       <h2>Posts Data</h2>
//       <pre>{JSON.stringify(postsData, null, 2)}</pre>
//     </div>
//   );
// };




// ? enabled это свойство, которое управляет запросом, 
// ? то есть запрос будет отправляться только в том случе если первый удачно выполнился
// const { data: userData, error: userError, isLoading: userLoading } = useQuery({
//     queryKey: ['user', userId],
//     queryFn: () => fetchUserData(userId),
//   });

//   const { data: postsData, error: postsError, isLoading: postsLoading } = useQuery({
//     queryKey: ['posts', userId],
//     queryFn: () => fetchPostsData(userId),
//     enabled: !!userData, // Запустить запрос только после получения данных пользователя
//   });


//? queryKey должен быть всегда уникальным, потому что эти данные будут браться из кеша, если записать другое имя, 
//? то будут браться другие значения из кеша, которые записаны под этим квериКей


// ? useMutation это запросы для добавления удаления и обноваления, есть свои обработки, смотри их в главном файле



//* как я понял это серверный стейтМенеджмент, который нужен для управлением состоянием при получения данных с сервера. Мы можем управлять состоянием загрузки данных, 
//* получения и обработки ошибок, а также получения данных с сервера и их обработку