import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const ToConvertedBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const isConvertBtn = useSelector((state: RootState) => state.ConvertBtn.isConvertBtn)
    const [convertBtn, setConvertBtn] = useState<boolean>()

    useEffect(() => {
        setConvertBtn(isConvertBtn)
    }, [isConvertBtn])
    
    return convertBtn ? (
        <button onClick={onClick} className='fixed bottom-[40px] left-[50%] translate-x-[-50%] w-[300px] h-[40px] rounded-xl bg-cyan-950 text-white animate-[ConvertBtnAnim_1s_ease-in_1]'>
            Convert to JSON
        </button>
    ) : null
}

export default ToConvertedBtn