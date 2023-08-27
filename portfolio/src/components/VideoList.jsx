// const videos = [
//     {
//         name: 'Замыкание От и До',
//         duration: 15,
//         id: 1,
//     },
//     {
//         name: 'Роадмеп по JS',
//         duration: 15,
//         id: 2,
//     },
//     {
//         name: 'Что такое фронтенд',
//         duration: 15,
//         id: 3,
//     },
//     {
//         name: 'Что такое фронтенд 2',
//         duration: 10,
//         id: 4,
//     },
// ]

// export function VideoList() {
//     return (
//         <>
//             <h1>Video List</h1>
//             {/* <div>
//                 <p>Замыкание От и До</p>
//                 <p>15 минут</p>
//                 <button>Лайк!</button>
//             </div> */}

//             {
//                 videos.map((video) => {
//                     return (
//                         <div key={video.id}>
//                             <p>{video.name}</p>
//                             <p>{video.duration}</p>
//                             <button>Лайк!</button>
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }

import React, { useState } from 'react';
import './VideoList.css';

function VideoList() {
    const [activeIndex, setActiveIndex] = useState(0);

    const sliderItems = [
        { id: 1, title: 'video 1' },
        { id: 2, title: 'video 2' },
        { id: 3, title: 'video 3' }
    ];

    const handleSpin = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    return (
        <div className='slider'>
            {sliderItems.map((item, index) => (
                <div key={item.id} className={`slider-item ${index === activeIndex ? 'active' : ''}`}>
                    <h3>{item.title}</h3>
                </div>
            ))}
            <button onClick={handleSpin} className="spin-button">
                Spin
            </button>
        </div>
    );
}

export default VideoList;