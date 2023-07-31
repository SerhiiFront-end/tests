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
						className='text-slate-300 px-3 text-center'
					>
						<li
							className={
								activeSegment === el.targetSegment
									? 'bg-slate-500 rounded-md'
									: ''
							}
						>
							{el.label}
						</li>
					</Link>
				)
			})}
		</>
	)
}
