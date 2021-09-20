# Project Overview

## Project Name

Spill The Tea

## Project Description

This app allows users to interact with others by writing their own thoughts/comments about boba or drink recommendations and have others write notes/reviews on it.

## Wireframes

![wireframes (2)](https://user-images.githubusercontent.com/88290507/134059947-a9efcba5-5b90-4493-8c16-d05ddf05cb5b.jpg)


## Component Hierarchy

![component hierarchy](https://user-images.githubusercontent.com/88290507/134060246-0bb2eea8-717f-4b69-b1d0-3b1ad9576020.jpg)


## API and Data Sample

Example Link: 

https://api.airtable.com/v0/AIRTABLE_BASE_ID/posts?api_key=MY_API_KEY


```json
{
    "records": [
        {
            "id": "recAAMbyIFZxiV2UW",
            "fields": {
                "text": "Go to boba spot?",
                "postedBy": "bobalover",
                "comments": "Taste Tea!"
            },
            "createdTime": "2021-09-20T16:30:16.000Z"
        },
        {
            "id": "recV1J4ZBQKaBap3X",
            "fields": {
                "text": "Thinking of milk tea today.",
                "postedBy": "iscreamformilktea",
                "comments": "I recommend the taro milk tea from Share Tea!"
            },
            "createdTime": "2021-09-20T16:30:16.000Z"
        },
        {
            "id": "recjNO4r5lls5qbU6",
            "fields": {
                "text": "Feeling fruity today.",
                "postedBy": "fruitloops",
                "comments": "Get the snow strawberry lulu from The Alley if you're near one!"
            },
            "createdTime": "2021-09-20T16:30:16.000Z"
        }
    ],
    "offset": "recjNO4r5lls5qbU6"
}
```

### MVP/PostMVP

#### MVP 
- Create structure in React and using React Router
- Create an Airtable base and handle GET, POST, and PUT axios request
- Be able to render the posts onto the page
- Let users add and edit posts
- Let users to comment on other posts
- Use flexbox and grid for page structure
- Hide API keys
- Have site be responsive on mobile

#### PostMVP  

- Allow users to vote on posts
- Add second API  

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | H | 3hrs |
| Routing Setup | H  | 2hrs |
| Working with API | H | 3hrs |
| Axios Calling/Requests | H | 3hrs |
| Rendering Posts | H | 3hrs |
| Page Styling | M | 2hrs |
| Wireframes | H | 2hrs |
| Airtable Setup | H | 2hrs |
| Adding Form | M | 2hrs |
| Responsiveness | H | 3hrs |
| Display Content | M | 2hrs |
| Search Page Setup | M | 3hrs |
| Debugging | M | 3hrs |
| Deployment | H | 2hrs |
| Text style/colors | L | 2hrs |
| Total | H | 37hrs |

## SWOT Analysis

### Strengths:
In react, the only comfort I really have is rendering data from AirTable API onto the page and deleting.

### Weaknesses:
I am most worried about is my initial construction and making components. I think figuring out the order will be a challenge for me.

### Opportunities:
I have the opportunity to work on having a more understanding of how React works. This will push me to get my fundamentals down.

### Threats:
I have the tendency to overthink a lot of things and doubt myself. But I understand getting things right takes practice and making mistakes to laern from them. Also when really needing help, I need to reach out. I want to make sure I get down all my MVP and have everything working before the post MVP.
