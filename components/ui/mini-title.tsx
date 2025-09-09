interface Props {
    title: string
}

export const MiniTitle = ({
    title
}: Props) => {
    return (
        <h3 className='text-sm font-semibold text-accent uppercase tracking-wider mb-3'>{ title }</h3>
    )
}
