const Card = (props) => {

    const handleDelete = () => {
        props.onTaskComplete(props.id);
    }

    return(
        <>
            <div className="card">
                <p>{props.text}</p>
                <button onClick={handleDelete}>Completed</button>
              </div>
        </>
    )
};

export default Card