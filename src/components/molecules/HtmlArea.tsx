import React from 'react'
import { useDispatch } from 'react-redux'
import { setHtml } from '../../slices/HtmlInputSlice'

const HtmlArea = () => {
    const dispatch = useDispatch()

    return (
        <textarea
            placeholder='Enter your HTML code'
            className='resize-none w-[40%] h-[400px] rounded-xl bg-cyan-950 text-white p-[16px] overflow-auto '
            onInput={(e) => {
                dispatch(setHtml((e.target as HTMLTextAreaElement).value))
            }}
        >
            
        </textarea>
    )
}

export default HtmlArea