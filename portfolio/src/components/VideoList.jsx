const videos = [
    {
        name: 'Замыкание От и До',
        duration: 15,
        id: 1,
    },
    {
        name: 'Роадмеп по JS',
        duration: 15,
        id: 2,
    },
    {
        name: 'Что такое фронтенд',
        duration: 15,
        id: 3,
    },
    {
        name: 'Что такое фронтенд 2',
        duration: 10,
        id: 4,
    },
]

export function VideoList() {
    return (
        <>
            <h1>Video List</h1>
            {/* <div>
                <p>Замыкание От и До</p>
                <p>15 минут</p>
                <button>Лайк!</button>
            </div> */}

            {
                videos.map((video) => {
                    return (
                        <div key={video.id}>
                            <p>{video.name}</p>
                            <p>{video.duration}</p>
                            <button>Лайк!</button>
                        </div>
                    )
                })
            }
        </>
    )
}