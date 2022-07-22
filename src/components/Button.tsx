interface ButtonProps {
    children: JSX.Element | string;
    rounded: boolean,
    outlined: boolean,
    filled: boolean,
    background: string,
    color: string
}

const Button = ({ children, rounded, outlined, filled, background, color }: Partial<ButtonProps>) => {
    background = background ? background : 'cgreen-300'
    color = color ? color : 'cgreen-300'
    // const styles = `cursor-pointer ${rounded && 'rounded'} ${outlined && `${'text-'+color} ${'bg-'+background} border ${'border-'+color} ${'hover:bg-'+color} ${'hover:text-'+background}`} ${filled && `${'text-'+background} ${'bg-'+color} border ${'border-'+background} hover:${'bg-'+background} hover:${'text-'+color}`}
    // px-7 py-3`
    const styles = `cursor-pointer px-7 py-3 ${rounded ? 'rounded': ''} ${outlined ? ('text-'+color+' bg-'+background+' border border-'+color+' hover:bg-'+color) : ''}`
    // console.log(color, background)
    return (
    <div className={buildClass({rounded, outlined, filled, background, color})}>
        {children}
    </div>
    );
};

function buildClass({rounded, outlined, filled, background, color}: Partial<ButtonProps>): string{
    let styles = 'cursor-pointer px-7 py-3';
    rounded && (styles +=' rounded');
    outlined && (styles += ' text-'+color+' bg-'+background+' border border-'+color+' hover:bg-'+color);
    filled && (styles += ' scale-150');
    // console.log(styles)
    return styles.toString();

}

export default Button;
