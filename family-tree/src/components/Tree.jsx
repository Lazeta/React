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
                width: '100%',
                margin: '0 auto',
                textAlign: 'justify',
                backgroundColor: '#f5f5f5',
            }}>
            <span onClick={expand}>{data.title}</span>
            {isVisible ? (
                data?.children?.map((child) => {
                    return (
                        <div
                            style={{
                                padding: 10,
                                cursor: 'pointer',
                                border: '1px solid gray',
                                textAlign: 'justify',
                                backgroundColor: '#e2e2e2',
                            }}>
                                <Tree data={child} />
                        </div>
                    )
                })
            ) : (<></>)}
        </div>
    )
}