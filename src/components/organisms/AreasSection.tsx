import { useEffect, useState } from 'react'
import HtmlArea from '../molecules/HtmlArea'
import JsonArea from '../molecules/JsonArea'
import { RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import htmlToJson, { JSONTypes } from '../../utils/html2json'
import ToConvertedBtn from '../atoms/ToConvertedBtn'
import { toggleIsConvertBtn } from '../../slices/isConvertBtnSlice'

const AreasSection = () => {
    const html = useSelector((state: RootState) => state.HTML.html)
    const dispatch = useDispatch()
    const [json, setJson] = useState<JSONTypes | string>()
    const [prettyJson, setPrettyJson] = useState<string | null>(null)
    
    const toggleConvertHtml = () => {
        setJson(htmlToJson(html))
        setPrettyJson(JSON.stringify(json, null,  6))
    }

    useEffect(() => {
        if (html) {
            setJson(htmlToJson(html))
        }

        if (html.length > 0) {
            dispatch(toggleIsConvertBtn(true))
        } else dispatch(toggleIsConvertBtn(false))
    }, [html])
    
    return (
        <section className='w-full h-full'>
            <article className='w-full h-full flex justify-evenly items-center'>
                <HtmlArea />
                <JsonArea json={prettyJson || ''} />
            </article>

            <ToConvertedBtn onClick={toggleConvertHtml}/>
        </section>
    )
}

export default AreasSection