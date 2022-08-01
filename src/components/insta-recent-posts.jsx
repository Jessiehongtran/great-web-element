import React from 'react';

const images = [
    "https://i.pinimg.com/564x/ba/62/02/ba6202eec7ccfdbb47d6790e8d00d5d3.jpg",
    "https://i.pinimg.com/564x/d5/34/bc/d534bcea27ab0b06de7dda95d6557c13.jpg",
    "https://i.pinimg.com/564x/35/fa/da/35fadaebf3519c6bc8b33a8b4903e5ee.jpg",
    "https://i.pinimg.com/564x/66/b1/8f/66b18fac149ad64a379eaa079c2a16c7.jpg",
    "https://i.pinimg.com/564x/ed/d2/95/edd2950984d5786e9c9893f8eb52a77a.jpg",
    "https://i.pinimg.com/736x/52/06/6f/52066f9cb2ae53fc9cb4bf19b3b1f3cd.jpg"
]


export default function InstaRecentPosts (props) {

    const image_width = 180;
    const total_col = 4;
    const original_total_width = image_width*total_col;
    let total_width = original_total_width;

    const columns = [];

    for (let i = 0; i < images.length; i++) {
        if (columns.length < total_col) {
            columns.push([images[i]])
        } else {
            if (total_width === 0) {
                total_width = original_total_width;
            }
            console.log(total_col, Math.floor(total_width/image_width))
            columns[total_col - Math.floor(total_width/image_width)].push(images[i])
            total_width -= image_width;
        }
    }

    return (
        <div>
            <h3>Recent Posts</h3>
            <div className="images" style={{ display: 'flex' }}>
                {columns.map(col =>
                    <div style={{}}> 
                        {col.map(each => 
                        <div className="each-image" style={{ margin: '0 15px 15px 0', width: `${image_width}px` }}>
                            <img src={each} style={{width: '100%', borderRadius: '6px', }} />
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
    
}