import React from 'react'
import HtmlArea from '../molecules/HtmlArea'
import JsonArea from '../molecules/JsonArea'

const AreasSection = () => {
    return (
        <section className='w-full mt-[30px]'>
            <article className='w-full h-full flex justify-evenly items-center'>
                <HtmlArea />
                <JsonArea />
            </article>
        </section>
    )
}

export default AreasSection