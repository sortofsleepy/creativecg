import {useEffect, useState} from "https://esm.sh/stable/preact@10.11.0/deno/hooks.js";

export default function (props) {

    const {
        el_name = "content_section"
    } = props

    const [elements, set_elements] = useState([])

    useEffect(() => {
        let _elements = Array.prototype.slice.call(document.querySelectorAll(`.${el_name}`))
        _elements = _elements.map(itm => {
            let name = itm.dataset.linkTitle
            return {
                name,
                href: `${window.location.pathname}/#${itm.id}`
            }
        })

        set_elements(_elements)

    }, [])

    return (
        <>
            <div className="py-10">
                <h2>Contents</h2>
                <ul>

                    {
                        elements.map(link => {
                            return (
                                <li>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}