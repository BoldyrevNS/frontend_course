
function Episode(props) {
    return (
        <div className="episode">
            {/*eslint-disable-next-line*/}
            <img src={props.Image} alt="Episode picture" />
            <p> <b> Сезон </b> {props.Season}, <b> Серия </b> {props.Episode}</p>
            <p> <b> Премьера: </b> {props.Premiere}</p>
            <p> <b> Сюжет: </b> {props.Descript} </p>
        </div>
    )
}

export default Episode;