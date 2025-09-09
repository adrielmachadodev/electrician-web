interface Props {
    title: string
    color?: string
}

export const Title = ({
    title,
    color = "text-primary"
}: Props) => {
    return (
        <h2 className={`text-3xl lg:text-4xl font-bold ${ color } mb-6`}>{ title }</h2>
    )
}
