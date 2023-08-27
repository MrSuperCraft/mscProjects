 interface userActivity {
    name : string,
    type : typeOfActivity,
    description : string,
    userUid : string,
    participants : Number,
    accessibility : Number,
    price : Number,
    imageUrl : string,
    links : string[],
    averageRating : Number,
    reviews : Number
 }

 const myActivity : userActivity = {
    name : "Play Chess",
    type : "Recreational",
    description : "Play chess so you can improve and play like Magnus Carlsen",
    userUid : "EkI2sLiD53UHHbcmPnIN2ZrOHhD2",
    participants : 2,
    accessibility : 0.95,
    price : 0,
    imageUrl : "string",
    links : ["https://www.chess.com/es/terms/ajedrez-es", "https://www.chess.com/en"],
    averageRating : 5,
    reviews : 5
 }


type typeOfActivity = "Education" | "Recreational" | "Social" | "DIY" | "Charity" | "Cooking" | "Relaxation" | "Music" | "Busy / Work" ;

