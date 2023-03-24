function generateName()
{
   return  Math.random().toString(16).slice(2, 8)
}
describe("Tests", () => {
    it("test", () => {
        for(var i = 0;i<10;i++)
        {
            var name = generateName();

            expect(typeof name).toEqual( "string" , "Name has to be a string.");
           // expect(photoManager.nameWasUnique(name)).toEqual( true, "Name has to be unique.");
            expect(name.length).toEqual( 6, "Name has to be 6 digits long.");
        }
    });
});

// https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript

/*
You are developing an image hosting website.

You have to create a function for generating random and unique image filenames.

Create a function for generating a random 6 character string which will be used to access the photo URL.

To make sure the name is not already in use, you are given access to an PhotoManager object.

You can call it like so to make sure the name is unique

// at this point, the website has only one photo, hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
Note: We consider two names with same letters but different cases to be unique.


* */
