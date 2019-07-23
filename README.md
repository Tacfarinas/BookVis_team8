#Project Objective 
Judging a book by its cover...our app will do exactly just that, using user inputs to project
the expected popularity rating and “number of books sold”. The application intends to find a relationship, using
historical data of book titles, MSRP, and book-cover images from open APIs, between how good a book looks
and how good it will sell.

Our app will take in user inputed data such as book cover image, title, and MSRP of a specific
format. This data will be taken from Google, Amazon, and Goodread APIs. The cover image will be trimmed
down to a certain number of pixels and processed through our prediction algorithm. The output is the
expected rating of the book and the number of books expected to be sold. Additionally, we will use multiple
API’s to help expand the amount of books we can scan/identify. This will be done through the use of multiple
API’s (ex. Amazon and Goodreads). If we have the time and resources, it would also be cool to display its
price on Amazon and possibly the web (maybe using Google’s API).

#Tasks and Roles:
1. API Bridging: process documentation from the APIs (such as ISBNdb, iDreamBooks, and Google Books)
to understand exactly how to communicate and extract data from them.
2. Data Collection: streaming data from available APIs on the features required to make analysis.
3. Data Modeling: make prediction algothrims with the data gathered based on existing features.

4. Application rendering: creating user interface, trimming of user inputs, basically the front-end and pre-
processing of data.
