import React, { useState } from 'react';

export default function Family({ familyTreeData }) {
    const [isVisible, setIsVisible] = useState(false);
    const expand = () => {
        setIsVisible(!isVisible);
    }

    // // При клике открываем лишь первый слой массива, не углубляясь
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


    // // Когда кликаем на Родителя главного, то открываем весь массив данных со всей вложенностью на сколько 
    // // хватает нашей структуры вызовов. Не рекурсивный метод, но функция вызывается повторно внутри return
    // return (
    //     <div
    //         style={{
    //             padding: 50,
    //             cursor: 'pointer',
    //             border: '1px solid black',
    //             width: 'fit-content',
    //             margin: '0 auto',
    //             textAlign: 'justify'
    //         }}>
    //         <ul onClick={expand} style={{ backgroundColor: '#000000', color: 'white' }}>{familyTreeData.name}</ul>
    //         {isVisible ? (familyTreeData?.children?.map((child) => {
    //             return (
    //                 <div
    //                     style={{
    //                         padding: 30,
    //                         cursor: 'pointer',
    //                         border: '1px solid black',
    //                         width: 'fit-content',
    //                         margin: '0 auto',
    //                         textAlign: 'justify',
    //                     }}>
    //                     <ul onClick={expand} style={{ backgroundColor: '#6b4141', color: 'white' }}>{child.name}</ul>
    //                     {child?.children?.map((subChild) => {
    //                         return (
    //                             <div
    //                                 style={{
    //                                     padding: 20,
    //                                     cursor: 'pointer',
    //                                     border: '1px solid black',
    //                                     width: 'fit-content',
    //                                     margin: '0 auto',
    //                                     textAlign: 'justify',
    //                                 }}>
    //                                 <ul onClick={expand} style={{ backgroundColor: '#9b3636', color: 'white' }}>{subChild?.name}</ul>
    //                                 {subChild.children?.map((subChildInner) => {
    //                                     return (
    //                                         <div
    //                                             style={{
    //                                                 padding: 10,
    //                                                 cursor: 'pointer',
    //                                                 border: '1px solid black',
    //                                                 width: 'fit-content',
    //                                                 margin: '0 auto',
    //                                                 textAlign: 'justify',
    //                                             }}>
    //                                             <ul onClick={expand} style={{ backgroundColor: '#cc2828', color: 'white' }}>{subChildInner?.name}</ul>
    //                                             {subChildInner.children?.map((subChildInner2) => {
    //                                                 return (
    //                                                     <li key={subChildInner2?.name} style={{ paddingLeft: 10, backgroundColor: '#fc7b02', color: 'white' }}>
    //                                                         {subChildInner2?.name}
    //                                                     </li>
    //                                                 );
    //                                             })}
    //                                         </div>
    //                                     )
    //                                 })}
    //                             </div>
    //                         )
    //                     })}
    //                 </div>
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
            <span span onClick={expand}>{familyTreeData.name}</span>
            {isVisible ? (
                familyTreeData?.children?.map((child) => {
                    return (
                        <div
                            style={{
                                padding: 30,
                                cursor: 'pointer',
                                border: '1px solid black',
                                width: 'fit-content',
                                margin: '0 auto',
                                textAlign: 'justify',
                            }}>
                            <Family familyTreeData={child} />
                        </div>
                    )
                })
            ) :
                (<></>)}
        </div >
    )
}