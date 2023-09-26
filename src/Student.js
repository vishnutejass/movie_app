function Student(props){
    const{stuname,marks}=props;
    return(
        <>
        <h1>Hello, {stuname}</h1>
        <p>You scored {marks}</p>
        <hr/>
        </>
    )
}
export default Student;