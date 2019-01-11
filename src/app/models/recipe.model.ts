class Recipe {
    _id:string;
    quote: string;
    author: string;
    date: Date;
    // status: string;

    constructor(
        ){
            this.quote = ""
            this.author = ""
            this.date = new Date()
            // this.status = ""
        }
}

export default Recipe;