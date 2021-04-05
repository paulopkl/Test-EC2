import Link from 'next/link';

const muchSonic = (props) => {

    return (
        <div>
            <Link href="/">Ver imagem</Link>
            <img src="/sonic.jpg" width={props.width} height={props.height} alt="insanic"/>
        </div>
    )
}

export default muchSonic;