import { convertReadingTimeToPersian, convertRelativeDatoToPersian, getReadingTime, getRelativeDate } from '@/lib/helpers'
import { Post } from '@/types/collection'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

interface PostContentProps {
    post: Post
}

const PostContent = ({ post }: PostContentProps) => {
    return (
        <div className='space-y-2'>
            {/* Tags */}
            <div className='flex items-center gap-2 text-sm text-neutral-400'>
                <div className={`font-medium ${post.category.title === 'شهرها' ? 'text-emerald-600' : 'text-indigo-600'}`}>{post.category.title}</div>
                <div className='w-2 h-2 rounded-full bg-neutral-200' />
                <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
                <div className='w-2 h-2 rounded-full bg-neutral-200' />
                <div>{convertReadingTimeToPersian(getReadingTime(post.body))}</div>
                <div className='w-2 h-2 rounded-full bg-neutral-200' />
                <div>{convertRelativeDatoToPersian(getRelativeDate(post.date_created)!)}</div>
            </div>
            {/* Title */}
            <div className='font-medium text-3xl'>{post.title}</div>
            {/* Description */}
            <div className='text-neutral-600 leading-snug'>{post.description}</div>
            <div className='flex items-center gap-2 pt-3'>
                بیشتر بدانید <ArrowLeft />
            </div>
        </div>
    )
}

export default PostContent