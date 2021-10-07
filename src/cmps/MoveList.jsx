import React from 'react'
import { Link } from 'react-router-dom'
import { MovePreview } from './MovePreview'

export function MoveList({ moves, title, withContactName, toggleMovesList, buttonTitle }) {

    // if (!moves || moves.length === 0) return (<div>Nothing to show</div>)
    return (

        // <div>
        //     {JSON.stringify(moves)}
        // </div>
        <div className="move-list">
            <div className="flex space-between align-center">
                <h3>{title}</h3>
                <Link><span className="sm-font" onClick={toggleMovesList} >{buttonTitle}</span></Link>
            </div>

            {!moves.length && <div className="no-moves">Nothing to show yet..</div>}

            {moves.map((move, index) => (
                <MovePreview move={move} key={index} withContactName={withContactName} />
                // <MovePreview move={move} key={move.at} withContactName={withContactName}/>
            ))
            }
        </div>

    )
}

