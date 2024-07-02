const todo = document.querySelector("#todos")
const btnSearch =  document.querySelector("#btnFetch")



btnSearch.addEventListener('click', () => {
    const data = fetch('https://jsonplaceholder.typicode.com/')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
    .finally(() => console.log('fetch finalizado'))

    todo.innerHTML = data

}
)

