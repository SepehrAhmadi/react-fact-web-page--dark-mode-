
function Footer(props){
    return(
        <footer className={props.darkMode ? "footer dark" : "footer"}>
            <span>2024 FiNiK development. All right reseved</span>
        </footer>
    )
}

export default Footer