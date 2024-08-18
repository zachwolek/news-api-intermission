export const getArticles = () => {
    return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0994f409c446431886f41cc5057c5379")
    .then((response) => {
        if (!response.ok){
            throw new Error (`Something went wrong at ${response.error}`)
        } else {
            return response.json()
        }
    })
  .catch((error) => console.error(error));
}

export const getEverythingArticles = () => {
    return fetch("https://newsapi.org/v2/everything?q=news&apiKey=0994f409c446431886f41cc5057c5379")
    .then((response) => {
        if (!response.ok){
            throw new Error (`Something went wrong at ${response.error}`)
        } else {
            return response.json()
        }
    })
  .catch((error) => console.error(error));
}

