import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return <>
        <Head>
            <title>Posts</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href='#'>
                    <time>01 de maio de 2022</time>
                    <strong>titulo do post</strong>
                    <p>conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post </p>
                </a>
                <a href='#'>
                    <time>01 de maio de 2022</time>
                    <strong>titulo do post</strong>
                    <p>conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post </p>
                </a>
                <a href='#'>
                    <time>01 de maio de 2022</time>
                    <strong>titulo do post</strong>
                    <p>conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post conteudo do post </p>
                </a>
            </div>
        </main>
    </>
}