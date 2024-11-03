import { Post } from '@/types/collection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostContent from './post-content'

interface PostProps {
    post: Post;
    layout?: "horizontal" | "vertical"
}

const PostCard = ({ post, layout = "horizontal" }: PostProps) => {
    return (
        <Link href={`/post/${post.slug}`} className={`${layout === "horizontal" ? "grid grid-cols-2 gap-10 items-center" : "grid grid-cols-1 gap-10"}`}>
            {/* Post Image */}
            <Image alt={post.title} src={post.image} width={600} height={300} className='rounded-md w-full max-h-[300px] object-cover object-center' />
            {/* Post Content */}
            <PostContent post={post} />
        </Link>
    )
}

export default PostCard