import React from 'react';

const images = [
    "https://i.pinimg.com/564x/ba/62/02/ba6202eec7ccfdbb47d6790e8d00d5d3.jpg",
    "https://i.pinimg.com/564x/d5/34/bc/d534bcea27ab0b06de7dda95d6557c13.jpg",
    "https://i.pinimg.com/564x/35/fa/da/35fadaebf3519c6bc8b33a8b4903e5ee.jpg",
    "https://i.pinimg.com/564x/66/b1/8f/66b18fac149ad64a379eaa079c2a16c7.jpg",
    "https://i.pinimg.com/564x/66/b1/8f/66b18fac149ad64a379eaa079c2a16c7.jpg",
    "https://i.pinimg.com/564x/66/b1/8f/66b18fac149ad64a379eaa079c2a16c7.jpg"
]


export default function InstaRecentPosts (props) {

    const image_width = 250;
    const total_col = 3;
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
                        <div className="each-image" style={{ margin: '10px', width: `${image_width}px` }}>
                            <img src={each} style={{width: '100%', borderRadius: '6px', }} />
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
    
}