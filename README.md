### Two react apps
Dog finder routes to different dogs and displays information on that dog when you’re at that route.

homepage: /dogs will show all three dogs.
Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to /dogs/whiskey.
every other endpoint not listed should redirect you to /dogs.

 FilterDogDetails is a component that takes in an object containing the details for all the dogs and will render the DogDetails of only the "current dog" or the dog that's been selected. Otherwise, if no dog is selected, it won't render anything at all.

