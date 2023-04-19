function Card (props){
    return(
        <div className="social-card flex justify-center items-center rounded-md cursor-pointer" >
            {props.render()}
        </div>
    )
}
export default Card