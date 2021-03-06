import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client'
import Link from 'next/link';

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
}

interface PostsProps {
    posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
    return <>
        <Head>
            <title>Posts | Blog</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                {posts.map(post => (
                    <Link key={post.slug} href={`/posts/preview/${post.slug}`}>
                        <a key={post.slug} href='#'>
                            <time>{post.updatedAt}</time>
                            <strong>{post.title}</strong>
                            <p>{post.excerpt}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </main>
    </>
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response: any = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100
    })

    const posts = response.results.map((post: any) => {
        return {
            slug: post.uid,
            title: post.data.Title,
            excerpt: post.data.Content.find((content: any) => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };
    })

    return {
        props: {
            posts
        }
    }
}