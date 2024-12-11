# Notes

Please spend no more than 2 hours on the task (it’s OK if you don’t complete all the requirements!) and add to the `NOTES.md` file in the project with notes on how you prioritised your time across those 2 hours and anything you’d like to tackle next if you had longer.   

## How long it took me
2h00m.

## How I spent my time
- [x] Panel 1 - I copy pasted an image of the first panel with the drivers to chatgpt and told it to use material UI to create a skeleton, I then split up the skeleton into individual components and refined them seperately. Also made models of the data I would store. Originally used hardcoded data. Styling was mostly unchanged from LLM code. ~35mins 
- [x] Panel 2 - Same process as Panel 1, changed styling a bit to fit correctly on the screen but not much beyond that. ~35mins
- [x] API - Created fake data in the API page (and deleted previous fake data). Wrote out hooks, and which hooks are passed through to which components. ~30mins
- [x] Search Bar - Added functionality to search bar component (made in Panel 1) with help from LLMs, specifying that it uses the Autocomplete tag from Material UI. It currently can look for a driver or stop and opens the panel of said driver or the driver that is going to that stop. ~20mins

## What I'd tackle next
- Fake data is rather crude, and the numbers don't make much sense within a larger context, e.g., timeslots not being sequential, or the later time coming before the earlier time. So I might add some validation to the fake data, or incorporating a real API with sensible data would be nice.
- Styling wasn't my main focus in this task due to the short time frame, so I defaulted to using Material UI components as they have decent styling out of the box, however these components also have a bit of a "Google-y" feel to them so I would want to customise the styling of the components more to match a Packfleet theme.
- Obviously not within the scope of the take home project, but integrating a map (once real data is acquired) looks like a fun challenge!