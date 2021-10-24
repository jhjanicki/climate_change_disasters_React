export const Slider = () => (
    <div id='sliderWrapper'>
        <input id='slider' type='range' min='1960' max='2010' step='10' value='1960' />
        <p id="start">start</p>
        <p id="end">end</p>
        <p>Decade: <span id="selectedDecade">1960s</span></p>
    </div>
);