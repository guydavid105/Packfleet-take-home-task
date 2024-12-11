# Take-home Task

We’d like you to build a simplified version of our routing page that allows a member of the team to see a list of drivers and the stops in their routes. 

You’re strongly encouraged to make use of search tools and LLM assistants (such as Copilot, Cursor, etc.) to help you complete this task as you would in a normal working environment. 

Please spend no more than 2 hours on the task (it’s OK if you don’t complete all the requirements!) and add to the `NOTES.md` file in the project with notes on how you prioritised your time across those 2 hours and anything you’d like to tackle next if you had longer.   

## **Requirements**

- call an API to retrieve a list of routes and stops within them
- display the list of routes showing the driver’s name and number of stops in one panel
- clicking on a route should show another expandable/collapsible panel that shows all the stops within that route
- each stop should show the tracking phrase (e.g. `jumping-fruit`), postcode and indicate its status (pending, completed, or failed)
- the first panel should contain a search field with autocomplete which calls an API and allows for searching for a route or a stop and navigating to it in the UI

Please create your own fake data to stub out the APIs, you will need fake data for routes and stops. An LLM assistant is great at creating stub data based on a rough schema. 

### Demo

<aside>
ℹ️ This is a demo of our routing page in the staging environment. Please ignore the elements or functionality not included in the requirements above (e.g. the map and certain extra info in the UI) and focus on the panels on the left-hand side.
</aside>

[Demo.mov](https://www.notion.so/packfleet/Take-home-Task-12fff1c28c238097871eee68ae39919c?pvs=4#12fff1c28c23808bb24ff216dd35ef43)

## Getting Started

We've set up a skeleton Next.js app for you which comes built-in with a server. However everything beyond this is up to you to implement.

To install use `npm install` and to run use `npm run dev`.

As a reminder:
- You’re strongly encouraged to make use of search tools and LLM assistants (such as Copilot, Cursor, etc.) to help you complete this task as you would in a normal working environment. 
- Please spend no more than 2 hours on the task and add to the `NOTES.md` file in the project with notes on how you prioritised your time across those 2 hours and anything you’d like to tackle next if you had longer.   

For any questions or areas not covered by this explanation or the demo video, use your best judgement in your understanding of the task within the context of Packfleet.