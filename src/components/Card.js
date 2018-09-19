import React from 'react'
import './card.css'

const Card = ({
    title = "Mount Raineer",
    elevation = 4000,
    src = "https://tailwindcss.com/img/card-top.jpg"
}) => (
    <div className="paper">
        <div className="w-full h-64 bg-cover" style={{
            backgroundImage: `url(${src})`
        }} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-grey-darker text-base">
                {elevation}
            </p>
        </div>
        <div className="px-6 py-4">
            <span
                className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
            <span
                className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
            <span
                className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#mountains</span>
        </div>
    </div>
)

export default Card