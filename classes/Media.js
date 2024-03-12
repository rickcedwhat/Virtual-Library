// create your Media class:
class Media{
    static totalMediaCount = 0;
    constructor(title,year,genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
        Media.totalMediaCount++;
    }
    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
    // static summary(){
    //     return `Total Media Count: ${Media.totalMediaCount}`
    // }
}

// const book1 = new Media('Harry Potter', 2000, 'Fantasy');
// const movie1 = new Media('The Matrix', 1999, 'Science Fiction');
// console.log(book1)
// console.log(book1.summary())
// console.log(Media.summary())

// uncomment below to export it:
module.exports = Media;
