export function Post({author, content}) {
    return (
        <section>
            <h3>{author}</h3>
            <article>{content}</article>
        </section>
    )
}