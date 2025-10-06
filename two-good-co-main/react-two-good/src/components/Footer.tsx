function Footer() {
	return (
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
	)
}

export default Footer 