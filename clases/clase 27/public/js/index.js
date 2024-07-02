const todo = document.querySelector("#todos")
const btnSearch =  document.querySelector("#btnFetch")


async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    return data
}

btnSearch.addEventListener('click', async () => {
    const data = await getTodos() 
    console.log(data)
    todo.innerHTML = `<li>${data.title}</li>
                      <li>${data.completed}</li>
                      <li>${data.id}</li>
                      <li>${data.userId}</li>`              
}
)

