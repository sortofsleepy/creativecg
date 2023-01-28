import {useEffect, useState} from "https://esm.sh/stable/preact@10.11.0/deno/hooks.js";

interface Link {
    href: string,
    title: string
}
// TODO tie in pagelinks component
export default function () {

    const [links, set_links] = useState([])
    const base_links = [
        {

            href: "/webgl",
            title: "WebGL"
        },
        {

            href: "/webgpu",
            title: "WebGPU"
        },
        {

            href: "/vulkan",
            title: "Vulkan"
        },
        {

            href: "/houdini",
            title: "Houdini"
        },
        {

            href: "/unreal",
            title: "Unreal Engine"
        },
        {
            href: "/misc",
            title: "Misc"
        }
    ]


    useEffect(() => {
        const tmp: Array<Link> = []
        base_links.forEach(itm => {
            if (itm.href !== window.location.pathname) {
                tmp.push(itm)
            }
        })

        set_links(tmp)
    }, [])

    return (
        <header>
            <a href="/">Home</a>
            <nav>
                <p>Topics</p>
                <div className="subtopics">

                    <ul>
                        {links.map(link => {
                            return (
                                <li>
                                    <a href={link.href}>{link.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}