import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Post = () => {
    const [ok, setOk] = useState(true);
    const [texto, setTexto] = useState('');
    const [api, setApi] = useState('');

    const router = useRouter();
    let { pid } = router.query;

    const showSomeThing = () => {
        setOk(!ok);
        console.log(ok);
        if(ok) {
            alert("teste!!");
        }
    }

    const buscaApi = async txt => {
        let api = await fetch(`https://viacep.com.br/ws/${txt}/json/`).then(res => res.json());
        setApi(api);
    }

    return (
        <div>
            <p>Post: {pid}</p>
            <p>Post: {pid}</p>
            <input type="number" onChange={() => setTexto(event.target.value)} value={texto} />
            <button onClick={() => showSomeThing()}>showsomething</button>
            <button onClick={() => buscaApi(texto)}>Buscar com uma API</button>
            <pre>{JSON.stringify(api, null, 4)}</pre>
        </div>
    )
};

// Post.getInitialProps = () => {

// }

export default Post;