export default async function () {

    let routes = [];

    for await (const dirEntry of Deno.readDir("routes/")) {

        if (dirEntry.name !== "api" && dirEntry.name.search("index") === -1) {

            let name = dirEntry.name.split("")
            name[0] = name[0].toUpperCase()
            name = name.join("")

            routes.push({
                name,
                href:`/${dirEntry.name}`
            })
        }

    }
    return routes
}