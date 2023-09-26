import {Component} from "react";
// import styled from "styled-components";

// const Img = styled.div`
// flex: 1;
// padding: 5px;
// &:hover{color:#fff};
// `;

class MovieCard extends Component{
   

    render(){
       //console.log(this.props);
        //const {movies: data}=this.props;
        const {movies , addStars , decStars,toggleFav,toggleCart} = this.props;

        const {title,plot,poster,price,rating,stars,fav,cart} = this.props.movies; //destructuring     this.props.movies or data both are same
        return (
           <div className="main">
            
           <div className="movie-card">
               <div className="left">
                <img src={poster} alt="Poster"/>
               </div>

               <div className="right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>

                <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="star-dis">
                       
                       <img className="str-btn" 
                       src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                       alt="decrease"
                       onClick={() => {decStars(movies)}}/>
              
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                            alt="star"
                             className="stars"/>

                      <img className="str-btn" 
                       src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" 
                       alt="increase"
                        onClick={()=>{addStars(movies)}}/> 
                        
                        
                        <span className="starCount">{stars}</span>

                    </div>

                    {/* { fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button>:
                    <button className="favourite-btn" onClick={this.handleFav}>Favourites</button>} */}
                    
                    <button className={fav?"unfavourite-btn":"favourite-btn"} 
                    onClick={()=>{toggleFav(movies)}}>{fav?"unfavourite":"favourite"}</button>
                    
                   
                    <button className={cart?"cart-btn":"remcart-btn"} onClick={()=>{toggleCart(movies)}}>{cart?"add to cart":"remove"}</button>
                </div>
               </div>
           </div>

           </div>
        )
    }
}

export default MovieCard;