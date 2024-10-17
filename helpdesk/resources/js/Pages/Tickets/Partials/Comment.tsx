import { Column, Line } from '@/Components/ui/flex';
import { Caption, H4, P } from '@/Components/ui/typography';
import { cn } from '@/lib/utils';
import { Comment as CommentType } from '@/types';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
    comment: CommentType;
    className?: ClassNameValue;
}

export default function Comment({ comment, className }: Props) {
    return (
        <Column className={cn("bg-muted px-4 py-2 rounded", className)}>
            <Line>
                <H4>{comment.user.name}</H4>
                <Caption>{new Date(comment.created_at).toLocaleString()}</Caption>
            </Line>
            <P>{comment.content}</P>
        </Column>
    )
}
