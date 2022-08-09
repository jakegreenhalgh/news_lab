import { useState } from "react"

const SearchBar = ({news}) => {
    const [results, setResults] = useState([])
    const [query, setQuery] = useState(null)

    const searchStories = (event) => {
        setQuery(event.target.value)
        if (!query) {
            return
        }

        setResults(news.filter((story) => {
            const StoryName = story.title.toLowerCase();
            return StoryName.includes(query)
        }))
    }
    
    return <>
        <form action="/" method="get">
        <label htmlFor="story_search">
            <span>Search top stories</span>
        </label>
        <input
        typeof="text"
        id="story_search"
        name="query"
        onChange={searchStories}></input>
    </form>
    <ul>{results.map((result, index) => {<li key={index}>{result.title}</li>})}</ul>
    </>
}

export default SearchBar