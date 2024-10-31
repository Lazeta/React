import React, { useState } from 'react';
import Button from './buttons/Button';

export default function Tree({ data }) {
    const [isVisible, setIsVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const expand = () => {
        setIsVisible(!isVisible);
    }

    // function an filter the data based on the search term
    const filterChildren = (children) => {
        if (!children) return [];
        return children.filter(child => {
            const matchesTitle = child.title.toLowerCase().includes(searchTerm.toLowerCase());
            const hasVisibleChildren = filterChildren(child.children).length > 0;
            return matchesTitle || hasVisibleChildren;
        });
    }

    const filteredChildren = filterChildren(data.children);


    return (
        <div
            style={{
                padding: '10px 15px',
                border: '2px solid gray',
                width: '100%',
                margin: '0 auto',
                textAlign: 'justify',
                backgroundColor: '#f5f5f5',
            }}>
            <button onClick={expand} style={{ cursor: 'pointer', padding: `10px 40px` }}>{data.title}</button>
            <p type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ margin: '0', width: '95%', paddingLeft: 10, textAlign: 'justify', }}
            />
            {isVisible && filteredChildren.length > 0 && (
                <div style={{ padding: '5px 10px', marginBottom: 10 }}>
                    {filteredChildren.map((child, index) => (
                        <div key={index}>
                            <Tree data={child} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}