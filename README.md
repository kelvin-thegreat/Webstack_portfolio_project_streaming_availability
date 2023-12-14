
# WebStack Portfolio Project 
## Resources

+ [API Hubs](https://rapidapi.com/hub)

+ [ Tailwind CSS](https://tailwindcss.com/docs/installation)

+ [Javascript Framework](https://nextjs.org/)

## skill set

+ Group project
  
+ Front-end
  
+ Back-end
  
+ Portfolio project

**Streaming Availability Application **

## Introduction

In today's development landscape, public APIs offer a fast and efficient way to create diverse applications,
from small tools to large eCommerce platforms. RapidAPI Hub provides access to a plethora of public APIs, 
enabling developers to choose and integrate them seamlessly into their projects. In this project, I will walk
through the process of building a web application that allows users to check the availability of movies or TV
shows across various streaming services, utilizing APIs that provide information about major platforms. With 
this tech-skills at hand, I will be able to help other developers build a Streaming Availability App integrating data 
from the selected API through API Hub. A versatile approach  for the creation of dynamic and user-friendly 
applications for checking content availability across various streaming services.


## Technology Stack

For this project, I intend to leverage `Next.js` for the client-side development and `TailwindCSS` for styling. 
`TailwindCSS` simplifies styling with its utility classes directly applied in the markup.

## Choosing the API

+ [x] To get started,

  + visit RapidAPI Hub,
  + create an account, and
  + search for "Streaming Availability" in the search section.
  + Numerous APIs are available, and for this guide, we'll use the OTT Details API.
  + Choose any API based on preferences.
    + To use the selected API,
      + subscribe to it by clicking on the "Subscribe to Test" button.

## The UI:

Generate a `Next.js` boilerplate with integrated `TailwindCSS` Through running the following command in the terminal:

```bash
npx create-next-app -e with-tailwindcss streaming-application
```

After installation, navigate to the created `streaming-application` folder in your preferred code editor.

## Project Structure

The project folder includes the following components:

`pages directory:` Contains the `index.js` file, serving as the entry point or home page of the app. Additionally, 
it includes `_app.js` and an `api` directory to store API requests.

`public directory:` Holds assets, allowing placement of static files for later use in the application.

`package.json` and `package-lock.json:` Contain project metadata and track installed package versions, respectively.

`postcss.config.js:` Includes PostCSS configurations for styling.

`tailwind.config.js:` Contains TailwindCSS configurations, including color settings.

## How To Run The project

[Image]

Live Preview
[add deployment Link]

+ [x] Features
    + Search movies and TV shows.
    + Check their availability on 150 plus streaming platforms.

+ [x] Guide
    + Read a step-by-step guide to build this application.

+ [x] Installation Steps
    + Download the [streaming-application](https://github.com/kelvin-thegreat/Webstack_portfolio_project_streaming_availability) directory. Click here to download it.

    + Unzip the downloaded file and navigate to the working directory.
    ```bash
    cd RapidAPI\ DevRel-Examples-External\ main\ streaming-application/
    ```
    + Install dependencies
    ```
    npm install
    ```
    + Create `.env.local` file in root and add your RapidAPI key. `NEXT_PUBLIC_RAPIDAPI_KEY=YOUR_RAPID_API_KEY`
    + Run the app
    ```
    npm run dev
    ```
    + Open `localhost:3000` to see the application.
