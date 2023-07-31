'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import LinksItems from './Links.json'
export default function Links() {
	const activeSegment = useSelectedLayoutSegment()
	return (
		<>
			{LinksItems.map(el => {
				return (
					<Link
						key={el.id}
						href={el.path}
						className='px-3 text-center hover:text-gray-950 hover:ease-in hover:duration-200'
					>
						<li
							className={
								activeSegment === el.targetSegment
									? 'bg-slate-500 px-2'
									: 'px-2'
							}
						>
							{el.label}
						</li>
					</Link>
				)
			})}
			<Link href={'login'} className='px-3 text-center hover:text-gray-950 hover:ease-in hover:duration-200'><li>Login</li></Link>
		</>
	)
}
