# The Kitty Collective 
The Kitty Collective is a web page where users can browse a vast array of cats, select their favorites, and even add to the collections. Each cat has its traits described, including its age, breed, and gender. 

# Getting Started 
After setting up the backend server (see instructions here), do the following:
1. Fork and clone this repository.
2. Install dependencies `npm install`
3. Run the app simultaneously with the backend server `npm start`

# Features

**CRUD Operations**
- With a form, create an entry for a cat that has an age, gender, size, breed, and image.
- Using a favorite button, the user can "favorite" a cat and add it to the favorite section.
- If the user accidently messes up when creating a cat entry, they can delete that entry.

**React and React Router**
- Organize code structure by separating components into folder
- Organize web page by separating components through the NavBar
- Utilize inverse data flow by sending props between parent and child components

# Tech Stack
- React.js
- React Router
- HTML/CSS

# Data Flow
```
                                index
                                  |
                                 App
                __________________|____________________
               |         |        |          |         |
              Header   NavBar   Search   Favorites   Home
                            ______|______    |
                           |             |   |
                      OptionPicker  CatContainer
                                         |
                                      CatItem
```
