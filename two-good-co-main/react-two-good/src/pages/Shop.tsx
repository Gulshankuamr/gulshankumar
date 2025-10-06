import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Shop() {
	const sectionRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		const scroller = document.getElementById('main') as HTMLElement | null
		const ctx = gsap.context(() => {
			gsap.from('.grid-item', {
				opacity: 0,
				y: 40,
				duration: 0.8,
				stagger: 0.1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: sectionRef.current as Element,
					scroller: scroller || undefined,
					start: 'top 80%'
				}
			})
		}, sectionRef)
		return () => ctx.revert()
	}, [])

	const images = [
		'https://picsum.photos/id/1011/800/1000',
		'https://picsum.photos/id/1015/800/1000',
		'https://picsum.photos/id/1025/800/1000',
		'https://picsum.photos/id/1035/800/1000',
		'https://picsum.photos/id/1045/800/1000',
		'https://picsum.photos/id/1055/800/1000',
		'https://picsum.photos/id/1065/800/1000'
	]

	return (
		<div ref={sectionRef} data-scroll-section style={{ minHeight: '100vh', padding: '20vh 3vw 10vh' }}>
			<h1 style={{ fontFamily: 'futura', textTransform: 'uppercase' }}>Shop</h1>
			<div
				className="image-grid"
				style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '3vw' }}
			>
				{images.map((src, i) => (
					<div className="grid-item" key={i} style={{ overflow: 'hidden', borderRadius: '8px' }}>
						<img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Shop 