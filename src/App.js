import React from "react"
// import HeadingOne from "./HeadingOne";
// import HeadingTwo from "./HeadingTwo";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./moviesdata";


class App extends React.Component {
  constructor(){
    super(); //we must call the superclass
    this.state={   //to create a state
        
    movies:movies,
    cartCount:0
    }
    // this.addStars=this.addStars.bind(this);
}


handleIncStar = (movie) =>{
   const {movies} = this.state;

    const mid = this.state.movies.indexOf(movie);  //index number


    if(movies[mid].stars>=5)
    {
        return;
    }

    movies[mid].stars+=0.5;
   console.log(movies[mid].stars);
    this.setState({
        movies:movies
    })
}

 handleDecStars = (movie)=>{
    const {movies} = this.state; //deconstruct
   const mid = this.state.movies.indexOf(movie);//index number
    
    if(movies[mid].stars <=0){
        return;
    }
    movies[mid].stars -=0.5;
    console.log(movies[mid].stars);
    this.setState({
        movies:movies
    })
 }
 
 handleToggleFav= (movie) => {
    const{movies}=this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
        movies
    })
    //why did we used setState here?
    
 }
 
 handleToggleCart = (movie)=>{
    let {movies,cartCount}=this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart=!movies[mid].cart;
    //        console.log(movies[mid].cart);
   
    if(movies[mid].cart){
        cartCount=cartCount-1
    }
    else{
        cartCount+=1;
    }
    this.setState({
        movies,
        cartCount
    })
 }



render(){
   const{movies,cartCount}=this.state;
  return (
    <>
    <Navbar cartCount={cartCount} /> 
    
     <MovieList movies = {movies} 
                 addStars = {this.handleIncStar}
                 decStars={this.handleDecStars}
                 toggleFav={this.handleToggleFav}
                 toggleCart={this.handleToggleCart}
                  />

    {/* <HeadingOne/>
    <HeadingTwo/> */}
    </>
  );
}
}
export default App;
