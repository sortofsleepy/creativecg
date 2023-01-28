import Container from "../components/layout.tsx";
import getLinks from "../components/pagelinks.ts"
import {Handlers, PageProps} from "$fresh/src/server/types.ts";

export const handler: Handlers = {
    async GET(_, ctx) {
        let links = await getLinks();
        console.log(links);
        return ctx.render({
            links
        });
    },
};

export default function Home({data}: PageProps) {
    return (
        <>

            <Container>
                <h1 className="lg:text-8xl sm:text-5xl">CreativeCG</h1>
                <p className="py-4 intro">
                    Hello! If you've landed here then welcome. This is just a personal site of small notes and snippets
                    of
                    things I've come across over the years on a variety of topics
                    mostly related to creative coding and programming, all arranged into one place for easy reference.
                    Think
                    of it as a very messy, possibly rarely updated blog.

                    While mostly for personal use, hopefully it can prove useful to you as well.
                </p>

                <h2 className="mt-8">
                    Some of the topics will include
                </h2>
                <ul>

                    {
                        data.links.map(link => {
                            return (
                                <li>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <section class="pt-10">
                    <h2 class="mt-8">
                        Tech stack
                    </h2>

                    <p>
                      The tech stack is purposely kept sparse and simple. It uses Deno's <a href={"https://fresh.deno.dev/"} target="_blank" rel={"noreferrer"}>Fresh</a> framework and runs on Deno's network.
                        Styling is helped out a bit with <a href={"https://tailwindcss.com/"} rel={"noreferrer"}>Tailwind</a>.
                        The font is <a href={"https://www.fontshare.com/fonts/general-sans"} target="_blank" rel={"noreferrer"}>General Sans</a> by
                        the <a href={"https://www.fontshare.com/?q=Indian%20Type%20Foundry"} target="_blank" rel={"noreferrer"}>Indian Type Foundry</a>
                    </p>

                </section>

                <section class="pt-10">
                    <h2 class="mt-8">
                        About me
                    </h2>

                    <p>
                        If you'd like to learn a little about me, you can find out more <a href="http://about.xoio.co"
                                                                                           target="_blank"
                                                                                           rel="noreferrer">here</a>
                    </p>

                </section>

            </Container>
        </>
    );
}
