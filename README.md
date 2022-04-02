# phase-1-final-project

For my phase 1 project, I have created a plant finder with the purpose of posting plants, liking plants, and deleting plants. The purpose of this is to keep track of plants that a consumer may want to assist them with their lawns and gardens.

The app starts with the container up top. The default, when loading the page, hides the container until you click on the button that reads, "Add a new plant!" Each time you click on this button, the container will hide and then reappear.

When the page loads, you get all of the saved plants automatically listed. You can add as many plants as you like in the container above by inputting the name of the plant and the URL image link and submitting.

By posting a plant, it appears in your db.json with the name, image URL, likes, and id number. In order to post the plant, you also need to render each one. Rendering creates an individual card for each plant you post. The card includes your plant image as an avatar, the name of the plant, the amount of likes the plant has, a like button, and a delete button.

Next, I created a click event for both the like button and the delete button. Likes are unlimited and are saved, even when you refresh the page. The delete button permanently removes a plant card.

Finally, a PATCH request and a DELETE request are necessary for the like and delete buttons to work.

In the end, you get a fully functional plant finder that allows you to store, list, post, like, and delete plants that you need for your lawn or garden. It's the perfect tool to use for homeowners, landscapers, and gardeners alike!