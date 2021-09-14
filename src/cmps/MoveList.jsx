import React from 'react'
import { MovePreview } from './MovePreview'

export function MoveList({ moves,title, withContactName }) {
    return (

        // <div>
        //     {JSON.stringify(moves)}
        // </div>
        <div className="move-list">
            <h3>{title}</h3>
            {moves.map((move,index) => (
                <MovePreview move={move} key={index} withContactName={withContactName}/>
                // <MovePreview move={move} key={move.at} withContactName={withContactName}/>
            ))
            }
        </div>

    )
}

