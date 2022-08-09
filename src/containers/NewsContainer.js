import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

const NewsContainer = () => {
    const [news, setNews] = useState([])

    useEffect( () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => {
            const top20 = data.slice(0, 20)
            const stories = top20.map((storyID) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`).then(res => res.json())
            })
            Promise.all(stories).then((stories) => {setNews(stories)})
        })
    }, [])


    return (
        <div>
            <SearchBar news={news}/>
            <h1>Top Stories</h1>
            <NewsList news={news}/>
        </div>
    )
}

export default NewsContainer