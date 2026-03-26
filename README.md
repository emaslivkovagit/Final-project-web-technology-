# Final-project-web-technology-
Redesigning the Project Gutenberg website. 

Documentation – Final Project Web Technology 
 
Irma Åkerblom & Ema Slivková (group 2) 
 

How is the code structured in general? 
 
The general idea was to create our own reusable design for all the pages. This is done through using the same classes on multiple pages so create a consistent design on the whole webpage but also to make the design simpler. By doing so we were able to make the structure of the HTML documents more similar and create specific classes for styling only when the classes already made didn’t provide a suitable styling.  
 
By using the same classes on multiple pages we were also able to have the same header and footer on all the webpages and also a similar layout with grid for example.  
 
 
What has been changed from the original? 
 
The header:  
Our idea was to simplify the originals complexity. We decided to change the logo in the header to an actual text instead to create a more modern look and make it look less tacked-on. We also decided to add a new tagline in the header that is not in the original. We though that the original page lacked a clear message to the users what the page is about at first glance. To enhance usability and show the purpose of the webpage we decided to add it by making a class. Regarding the navigation we made it a navigation bar without the about dropdown since it only needed to lead to the first about page. Therefor we could skip the dropdown content and instead create a class for the header navigation with links.  
 
The about page: 
The page content on the original page is made with only one class for all information and using lists to sort the more about part. Our goal was to make it less text heavy to make it easier for the user to understand. Therefor we structured the content in section classes using shelf to organize the page more, to style it easier and to make the style consistent on other pages since the same classes are uses to structure the content on the reading list page also for example.  
The original list under “More About Project Gutenberg” was difficult to overview with unnecessary information, so to make it easier to overview we sorted the information in a grid instead with the keywords of the information. The line height was specifically styled for this text heavy page to increase readability.  
 
Main categories: 
Regarding the main content the original code used classes in divs to structure the different categories. We chose so structure the content similarly on this page as for example the about page with the class shelf instead using sections and also use grid to create the layout. We replaced the original list with grid to easier scan the content visually and reduce the unused blank space on the original page. The same links were kept but only structured with grid instead of lists.  
 
Reading lists: 
A similar structure has been used as the one in “Main Categories”, using sections to structure the content and the class shelf to achieve the same style. Here the links were also changed from lists to being structured with grid for the same reasons. But here we also used a specific class for the letter box to create a specific styling. This was to make the letter boxes more like a book with a paper feeling, but also to structure the content more since there were a lot of links.  