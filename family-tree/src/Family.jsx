import React, { useState } from 'react';

export default function Family({ familyTreeData }) {
    const [isVisible, setIsVisible] = useState(false);
    const expand = () => {
        setIsVisible(!isVisible);
    }


    // return (
    //     <div style={{ 
    //          paddingLeft: 10, 
    //          cursor: 'pointer', 
    //          border: '1px solid black', 
    //          width: 'fit-content', 
    //          margin: '0 auto', 
    //          textAlign: 'justify'}}>
    //         <span onClick={expand}>{familyTreeData.name}</span>
    //         {isVisible ? (familyTreeData.children.map((child) => {
    //             return (
    //                 <li key={child.name} style={{ paddingLeft: 10 }}>
    //                     <span>{child.name}</span>
    //                 </li>
    //             )
    //         })) : (
    //             <></>
    //         )}  
    //     </div>
    // )


    return (
        <div
            style={{
                paddingLeft: 10,
                cursor: 'pointer',
                border: '1px solid black',
                width: 'fit-content',
                margin: '0 auto',
                textAlign: 'justify'
            }}>
            <span onClick={expand}>{familyTreeData.name}</span>
            {isVisible ? (familyTreeData?.children?.map((child) => {
                return (
                    <div
                        style={{
                            paddingLeft: 10,
                            cursor: 'pointer',
                            border: '1px solid black',
                            width: 'fit-content',
                            margin: '0 auto',
                            textAlign: 'justify',
                        }}>
                        <span onClick={expand}>{child.name}</span>
                        {child?.children?.map((subChild) => {
                            return (
                                <div
                                    style={{
                                        paddingLeft: 10,
                                        cursor: 'pointer',
                                        border: '1px solid black',
                                        width: 'fit-content',
                                        margin: '0 auto',
                                        textAlign: 'justify',
                                    }}>
                                    <span onClick={expand}>{subChild?.name}</span>
                                    {subChild.children?.map((subChildInner) => {
                                        return (
                                            <div
                                                style={{
                                                    paddingLeft: 10,
                                                    cursor: 'pointer',
                                                    border: '1px solid black',
                                                    width: 'fit-content',
                                                    margin: '0 auto',
                                                    textAlign: 'justify',
                                                }}>
                                                <span onClick={expand}>{subChildInner?.name}</span>
                                                {subChildInner.children?.map((subChildInner2) => {
                                                    return (
                                                        <div>
                                                            <span>{subChildInner2?.name}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )
            })) : (
                <></>
            )}
        </div>
    )
}