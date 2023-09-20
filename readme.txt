#create the next.js app
    npx create-next-app@latest
    select the default values for the questions on prompt

# run the app 
    change directory to app
    in integrated terminal give command "npm run dev"

#MOCK API/ DATA
    as given, taken the data from ' https://rickandmortyapi.com/api/character'
    and add to app in 'public/mocks/rickyAndMorty.json
    verfiy the data by get operation as called in 'apis/rickyAndMorty/route.ts';

Next steps
- interface creation, as expected response
- create a component to render image and names
- get the data from mock, in page.tsx, and render it and custom style file used like wrapper.css