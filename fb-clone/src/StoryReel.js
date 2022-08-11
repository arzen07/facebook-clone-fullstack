import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/6f/Cartoon_Meditating_Man.svg"
            title="Sam K"
        />
        <Story
            image="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/4/43/Beautiful_woman%2C_Second_Life.jpg"
            title="Karen"
        />
        <Story
            image="https://upload.wikimedia.org/wikipedia/commons/c/c3/Conifer_forest.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/7/79/Regele_Mihai_I_Cartoon.jpg"
            title="Sandy"
        />
        <Story
            image="https://upload.wikimedia.org/wikipedia/commons/f/f3/Riley_TT_Sprite%2C_Bj._1937_%282007-06-16%29.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/aa/Snallygaster_cartoon.svg"
            title="Andrew G"
        />
    </div>
  )
}

export default StoryReel