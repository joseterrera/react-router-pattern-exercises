### Two react apps:
#### Dog Finder:
Dog finder routes to different dogs and displays information on that dog when you’re at that route.

homepage: /dogs will show all three dogs.
Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to /dogs/whiskey.
every other endpoint not listed should redirect you to /dogs.
Components:
<DogList /> takes all the dog info from the props of <App />
<DogDetails /> shows all of the info about a single dog

 FilterDogDetails is a component that takes in an object containing the details for all the dogs and will render the DogDetails of only the "current dog" or the dog that's been selected. Otherwise, if no dog is selected, it won't render anything at all.


#### Color Factory:
An app using react router that allows you to view colors and add new colors.

User Stories
1. As a user, I can go to /colors to see a list of all available colors.
2. As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color. (The route here should be /colors/:color )
3. As a user, I can click on a button to show a form that will let me add a new color. Note that you can give an input a type of color if you’re trying to select a color. (The route here should be /colors/new).
4. As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.
5. As a user, if I try to navigate to a color page that does not exist (eg, /colors/blargh), I am redirected to the colors index page.
6. As a user, if I try to navigate to an invalid url (eg, /this-is-not-valid), I am redirected to the colors index page.



