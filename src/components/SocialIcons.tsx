import Link from 'next/link';
import { Icon } from './Icon';
import { social } from "@/app/resources/content";

export const SocialIcons = ({ className }: { className?: string }) => {
    return (
        <div className={`flex gap-3 items-center ${className || ''}`}>
            {social.map((item) => {
                return (
                    <Link href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
                        <Icon name={item.icon} className='w-6 h-6 relative duration-250 hover:-translate-y-1' />
                    </Link>
                )
            })}
        </div>
    );
}