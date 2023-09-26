import React from "react";
import styled from "styled-components";

const Nav =styled.div`
width:100%;  
height:70px;
background: linear-gradient(170deg, #1bc059,#0d47a1);
display: flex;   
justify-content: space-between;
align-items:center;
position:relative;
`;

const Title = styled.div`
       font-size:30px;
        color:#fff;
        font-weight:600;
        font-family: 'Times New, sans-serif;
        text-transform: uppercase;
        margin-left:20px;
        &:hover{color:#0f0};
`;

const Cartcon = styled.div`
position: relative;
cursor: pointer;
`;

const Carticon = styled.img`
 height:46px;
 margin-right:20px;
`;

const Cartcnt=styled.div`
background-color: ${(props)=> props.color};     
        border-radius:50%;
        padding:4px 8px;
        position:absolute;
        top:-5px;
        right:10px;
        font-size:19;
        visibility: ${(props)=>props.show?"visible":"hidden"};
`;

//string interpolation"$"

class Navbar extends React.Component{
    render(){
        const {cartCount} = this.props;
        return(
            <>
           <Nav>

            <Title>
                VISHNU-FAV
            </Title>
            <Cartcon>
                <Carticon alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={styles.cartIcon}/>
                <Cartcnt color = "yellow" show ={true}>{cartCount}</Cartcnt>
            </Cartcon>
           </Nav>
            </>
        )
    }
}

export default Navbar;

const styles ={
    nav:{
           height:70,
           background:"#4267b5",
           display:"flex",
           justifyContent: "space-between",
           alignItems:"center",
           position:"relative"            
    },

    title:{
        fontSize:30,
        color:"black",
        fontWeight:600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft:20

    },

    cartContainer:{
        position:"relative",
        cursor:"pointer"
    },
    cartIcon:{
        height:48,
        marginRight:20
    },
    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        position:"absolute",
        top:-5,right:10,
        fontSize:12
    }
}



