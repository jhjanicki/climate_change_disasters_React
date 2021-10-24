export const Toggle = ({id, disaster}) => (
    <div className="inlineWrapper">
        <div className={`inline toggle${id}`} id={`filter${id}`}>
            <input id={`layer${id}On`} type="radio" value={`layer${id}On`} name={`toggle${id}`} checked='checked' />
            <input id={`layer${id}Off`} type="radio" value={`layer${id}Off`} name={`toggle${id}`} />
            <div className= {`toggle__pointer color${id}`}></div>
        </div>
        <div className="inline">
            <p className = "disasterName">{disaster}</p>
        </div>
    </div>
);