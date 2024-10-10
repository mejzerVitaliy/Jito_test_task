import React from "react"

const JsonArea:React.FC<{json: string}> = ({json}) => {
    return (
        <textarea value={json} placeholder='Here will be results of conversion' disabled className='resize-none w-[40%] h-[400px] rounded-xl bg-cyan-950 text-white p-[16px] overflow-auto '>
            
        </textarea>
    )
}

export default JsonArea