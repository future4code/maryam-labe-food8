import axios from 'axios'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);
    console.log(data);
    const getData = () => {
        axios
            .get(url, {
                headers: {
                    auth: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error)
                console.log("Ocorreu um erro, tente novamente!");
            });
    };
    useEffect(() => {
        getData();
    }, [url]);
    return [data, getData]
};
export default useRequestData



// import { useEffect, useState } from 'react'
// import axios from 'axios'
// const useRequestData = (initialData, url) => {
//   const [data, setData] = useState(initialData)
//   useEffect(() => {
//     axios.get(url , {
//       headers: {
//         Authorization: localStorage.getItem('token')
//       }
//     })
//       .then((response) => {
//         setData(response.data)
//       })
//       .catch((error) => {
//         console.log(error)
//         alert('Ocorreu um erro, tente novamente')
//       })
//   }, [url])
//   return (data)