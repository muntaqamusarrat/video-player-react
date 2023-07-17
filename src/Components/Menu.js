
export default function Menu({ onSelectVideo, videoValues }) {
    return (
        //the form el wraps the menu options in radio buttons for selecting a video
        //onClick is attached to the wentire form which means
        //it'll be triggered anywhere inside the form
        <form onClick={(event) => onSelectVideo(event.target.value)}>
            {/*for each value in the videoValues array*/}
            {videoValues.map((value, i) => (
                <div className="video-inputs">
                    {/*the input is rendered for each value in the array*/}
                    <input
                        key={i}
                        type="radio"
                        name="src" //to group the radio btn together
                        value={value} //set to curr value, from the array
                    />
                    {/*the text that'll appear next to the radio btns*/}
                    {value}
                </div>
            ))}
        </form>
    )
}