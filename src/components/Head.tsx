interface HeadProps {
    children: JSX.Element[] | String;
}

const Head = ({ children }: Partial<HeadProps>) => {
    return (
        <div className="Head bg-cgreen-200 text-white pt-5">
            <div className="max-w-[62.5rem] w-full m-auto flex flex-col gap-3">{children}</div>
        </div>
    );
};

export default Head;
