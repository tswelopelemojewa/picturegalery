import { useState } from 'react'

const Slider = () => {

    const images=[
        {id:0, value: "./img/IMG-1.jpg"},
        // {id:1, value: "./img/IMG-2.jpg"},
        {id:1, value: "./img/IMG-3.jpg"},
        {id:2, value: "./img/IMG-4.jpg"},
        {id:3, value: "./img/IMG-5.jpg"},
        // {id:5, value: "./img/IMG-6.jpg"},
        // {id:6, value: "./img/IMG-7.jpg"},
        {id:4, value: "./img/IMG-8.jpg"},
        {id:5, value: "./img/IMG-9.jpg"},
        // {id:9, value: "./img/IMG-10.jpg"},
        {id:6, value: "./img/IMG-11.jpg"},
        {id:7, value: "./img/IMG-12.jpg"}
    ]

    const [sliderData, setSliderData]= useState(images[0]);
 
    const handleClick = (index) => {
        const slider = images[index];
        setSliderData(slider);
    }


    return (
        <div className="">
            <div className="slider">
                {
                    images.map((data, i) => 
                    <img className={sliderData.id===i?"clicked":""} 
                        alt='' key={data.id} 
                        id="image-box" src={data.value} 
                        onClick={()=>{handleClick(i)}} width="70px" />
                    )
                }
            </div>

            <div class="img-container">
                <img src={sliderData.value} alt="" />
            </div>
        </div>
    );
}
 
export default Slider;