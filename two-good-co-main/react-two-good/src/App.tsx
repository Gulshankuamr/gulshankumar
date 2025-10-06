import { useEffect, useRef } from 'react'
import './style.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Catering from './pages/Catering'
import Donate from './pages/Donate'
import Footer from './components/Footer'

function App() {
	const mainRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const el = mainRef.current as HTMLElement
		const loco = new LocomotiveScroll({ el, smooth: true })

		loco.on('scroll', ScrollTrigger.update)

		ScrollTrigger.scrollerProxy(el, {
			scrollTop(value) {
				return arguments.length ? (loco.scrollTo(value as number, { duration: 0, disableLerp: true }), 0) : (loco as any).scroll.instance.scroll.y
			},
			getBoundingClientRect() {
				return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
			},
			pinType: (el as any).style.transform ? 'transform' : 'fixed',
		})

		const ctx = gsap.context(() => {
			gsap.to('#nav-part1 svg', {
				transform: 'translateY(-100%)',
				scrollTrigger: { trigger: '#page1', scroller: el, start: 'top 0', end: 'top -5%', scrub: true },
			})
			gsap.to('#nav-part2 #links', {
				transform: 'translateY(-100%)',
				opacity: 0,
				scrollTrigger: { trigger: '#page1', scroller: el, start: 'top 0', end: 'top -5%', scrub: true },
			})

			gsap.from('#page1 h1', { y: 100, opacity: 0, delay: 0.5, duration: 0.9, stagger: 0.3 })
			gsap.from('#video-container', { scale: 0.9, opacity: 0, delay: 1.3, duration: 0.5 })

			gsap.from('.footer-container div', {
				opacity: 0,
				y: 50,
				duration: 1,
				stagger: 0.3,
				ease: 'power3.out',
				scrollTrigger: { trigger: '.footer', scroller: el, start: 'top 90%' },
			})
			gsap.from('.footer-bottom', {
				opacity: 0,
				y: 30,
				duration: 1,
				delay: 0.5,
				ease: 'power3.out',
				scrollTrigger: { trigger: '.footer-bottom', scroller: el, start: 'top 95%' },
			})
		}, mainRef)

		const onRefresh = () => {
			loco.update()
		}
		ScrollTrigger.addEventListener('refresh', onRefresh)
		requestAnimationFrame(() => {
			ScrollTrigger.refresh()
		})

		return () => {
			ctx.revert()
			ScrollTrigger.getAll().forEach(t => t.kill())
			ScrollTrigger.removeEventListener('refresh', onRefresh)
			loco.destroy()
		}
	}, [])

	useEffect(() => {
		const play = document.getElementById('play') as HTMLDivElement | null
		const cursor = document.getElementById('cursor') as HTMLDivElement | null
		const videoCon = document.getElementById('video-container')
		if (!play || !cursor || !videoCon) return

		const onEnter = () => gsap.to(play, { scale: 1, opacity: 1 })
		const onLeave = () => gsap.to(play, { scale: 0, opacity: 0 })
		const onMove = (e: MouseEvent) => {
			gsap.to(play, { left: e.clientX - 70, top: e.clientY - 80 })
			gsap.to(cursor, { left: e.clientX, top: e.clientY })
		}

		videoCon.addEventListener('mouseenter', onEnter)
		videoCon.addEventListener('mouseleave', onLeave)
		document.addEventListener('mousemove', onMove)

		const hoverables = Array.from(document.querySelectorAll('.child'))
		const onChildEnter = () => gsap.to(cursor, { transform: 'translate(-50%,-50%) scale(1)' })
		const onChildLeave = () => gsap.to(cursor, { transform: 'translate(-50%,-50%) scale(0)' })
		hoverables.forEach((el) => {
			el.addEventListener('mouseenter', onChildEnter)
			el.addEventListener('mouseleave', onChildLeave)
		})

		return () => {
			videoCon.removeEventListener('mouseenter', onEnter)
			videoCon.removeEventListener('mouseleave', onLeave)
			document.removeEventListener('mousemove', onMove)
			hoverables.forEach((el) => {
				el.removeEventListener('mouseenter', onChildEnter)
				el.removeEventListener('mouseleave', onChildLeave)
			})
		}
	}, [])

	return (
		<BrowserRouter>
			<NavBar />
			<div id="main" ref={mainRef} data-scroll-container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/catering" element={<Catering />} />
					<Route path="/donate" element={<Donate />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
