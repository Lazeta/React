import React, { useState } from 'react';

export default function Tree({ data }) {
    const [isVisible, setIsVisible] = useState(false);
    const expand = () => {
        setIsVisible(!isVisible);
    }


    return (
        <div
            style={{
                padding: 5,
                cursor: 'pointer',
                border: '1px solid gray',
                width: '92%',
                margin: '0 auto',
                textAlign: 'justify',
                backgroundColor: 'orange',
            }}>
            <span onClick={expand}>{data.title}</span>
            {isVisible ? (
                data?.children?.map((child) => {
                    return (
                        <div
                            style={{
                                padding: 30,
                                cursor: 'pointer',
                                border: '1px solid white',
                                textAlign: 'justify',
                                backgroundColor: 'yellow',
                            }}>
                            <Tree data={child} />
                        </div>
                    )
                })
            ) : (<></>)}
        </div >
    )
}