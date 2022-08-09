import React from "react"
import NewsStory from "./NewsStory";

const NewsList = ({news}) => {
  
    const newsItems = news.map((story, index) => {
      return <NewsStory key={index} story={story}/>
    })

    return (
    <ul>
      {newsItems}
    </ul>
    )
}

export default NewsList;
