import React from 'react'

const HtmlArea = () => {
    return (
        <textarea placeholder='Enter your HTML code' className='resize-none w-[40%] h-[500px] rounded-xl bg-cyan-950 text-white p-[16px] overflow-auto '>
            {`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                
            </body>
            </html>`}
        </textarea>
    )
}

export default HtmlArea