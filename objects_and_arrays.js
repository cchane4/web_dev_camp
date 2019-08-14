/* how to use a forEach loop and an object*/

let movies = [ 
    { 
        title: "The Color Purple", 
        hasWatched: true, 
        rating: 5
    }, 
    { 
        title: "The Skeleton Key", 
        hasWatched: false, 
        rating: 7.5 
    }, 
    { 
        title: "Paid In Full",
        hasWatched: true, 
        rating: 3
    }
]

let all_movies = movies.forEach ( (movies) => { 
    let result = "You have "; 
    if (movies.hasWatched){ 
        result += "watched "; 
    } else { 
        result += "not seen "; 
    }
    result += "\"" + movies.title + "\" - "; 
    result+= movies.rating + " stars";
    console.log(result); 
})

all_movies();


/* alternatively the above code can be cleaned up a bit by combining steps into bigger functions 

let build_string =  (movies) => { 
    let result = "You have "; 
    if (movies.hasWatched){ 
        result += "watched "; 
    } else { 
        result += "not seen "; 
    }
    result += "\"" + movies.title + "\" - "; 
    result+= movies.rating + " stars";
    return result; 
}

let all_movies = movies.forEach ((movies) => { 
    console.log(build_string(movies)); 
}); 

all_movies(); 

*/