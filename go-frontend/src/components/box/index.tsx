import './index.scss'

interface BoxProps {
    flex?: 'column' | 'row',
    gap?: string
    style?: React.CSSProperties
    children: React.ReactNode[]
}
export default function Box({ children, flex = 'row', ...props }: BoxProps) {

    return (
        <div className={`box box-${flex}`} {...props} style={{ gap: props.gap, ...props.style }}>{
            children.map(child => child)
        }</div>
    )
}