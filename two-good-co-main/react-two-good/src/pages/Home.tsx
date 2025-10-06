function Home() {
	return (
		<>
			<div id="cursor"></div>
			<div id="page1" data-scroll-section>
				<h1>Change</h1>
				<h1>the course</h1>
				<div id="video-container">
					<div id="play">PLAY</div>
					<video autoPlay loop muted src="/video.mp4"></video>
				</div>
			</div>
			<div id="page2" data-scroll-section>
				<div id="elem1" className="elem">
					<img data-scroll data-scroll-speed="1" src="https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format" alt="" />
					<div data-scroll data-scroll-speed="-2" className="dets"></div>
				</div>
				<div id="elem2" className="elem">
					<img data-scroll data-scroll-speed="1" src="https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format" alt="" />
					<div data-scroll data-scroll-speed="-2" className="dets"></div>
				</div>
				<div id="elem3" className="elem">
					<img data-scroll data-scroll-speed="1" src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format" alt="" />
					<div data-scroll data-scroll-speed="-2" className="dets"></div>
				</div>
			</div>
			<div id="page3" data-scroll-section>
				<div className="child" id="child1">
					<img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="" />
				</div>
				<div className="child" id="child2">
					<img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="" />
				</div>
				<div className="child" id="child3">
					<img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="" />
				</div>
				<div className="child" id="child4">
					<img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="" />
				</div>
			</div>
			<footer className="footer" data-scroll-section>
				<div className="footer-container">
					<div className="footer-logo">
						<h2>MyProject</h2>
						<p>Crafting amazing experiences with animations.</p>
					</div>
					<div className="footer-links">
						<h3>Quick Links</h3>
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
					<div className="footer-social">
						<h3>Follow Us</h3>
						<div className="social-icons">
							<a href="#"><i className="fab fa-facebook-f"></i></a>
							<a href="#"><i className="fab fa-twitter"></i></a>
							<a href="#"><i className="fab fa-instagram"></i></a>
							<a href="#"><i className="fab fa-linkedin-in"></i></a>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<p>© 2025 MyProject. All rights reserved.</p>
				</div>
			</footer>
		</>
	)
}

export default Home 