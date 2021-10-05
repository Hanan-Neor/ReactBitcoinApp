import React from 'react'
import { Link } from 'react-router-dom'

export function MovePreview({ move, withContactName }) {
    return (
        <div className="move-preview">
            {/* {JSON.stringify(move)} */}
            {/* {withContactName? `To ${move.to}` : ''} */}
            {withContactName && <>To <Link to={'/contact/' + move.toId}>{move.to}</Link> <br /></>}
            {/* {`To ${move.to}`}<br/> */}

            <span className="bitcoin">₿ {move.amount}</span> | 
            <span className="usd"> {move.usdAmount.toLocaleString('en-US', {style: 'currency',currency: 'USD',minimumFractionDigits: 2,maximumFractionDigits: 2,})}</span> 
            <br />

            {/* // {move.amount.toLocaleString('en-US', {
            //     style: 'currency',
            //     currency: 'USD',
            //     // useGrouping:true,
            //     minimumFractionDigits: 0,
            //     maximumFractionDigits: 0,
            // })} B <br /> */}

            {/* {new Date(move.at).toLocaleDateString()} */}
            <span className="sm-font">{new Date(move.at).toLocaleString()}</span>
        </div>
    )
}
