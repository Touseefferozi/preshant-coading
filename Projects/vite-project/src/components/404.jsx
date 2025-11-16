import React from "react";
import styles from "./NotFound.module.css";

export default function NotFound() {
	const goHome = (e) => {
		e.preventDefault();
		// prefer client-side navigation if a router is present
		if (window && window.history && window.history.pushState) {
					try {
						window.history.pushState({}, "Home", "/");
						window.dispatchEvent(new PopStateEvent("popstate"));
						return;
					} catch {
						// fallthrough to location replace
					}

                    
		}
		window.location.href = "/";
	};

	return (
		<main className={styles.root} role="main" aria-labelledby="notfound-title">
			<section className={styles.container} aria-label="404 not found">
				<div>
					<span className={styles.badge}>Page not found</span>

					<h1 id="notfound-title" className={styles.title}>
						Oops — we can’t find that page
					</h1>

					<p className={styles.description}>
						The page you’re looking for doesn’t exist or has been moved. Check
						the URL for mistakes, or return to the homepage.
					</p>

					<div className={styles.actions}>
						<button className={styles.primaryBtn} onClick={goHome}>
							Take me home
						</button>

						<a className={styles.secondaryLink} href="mailto:hello@example.com">
							Contact support
						</a>
					</div>
				</div>

				<figure className={styles.art} aria-hidden="true">
					<svg
						width="340"
						height="220"
						viewBox="0 0 360 240"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						aria-hidden="true"
					>
						<defs>
							<linearGradient id="g1" x1="0" x2="1">
								<stop offset="0" stopColor="#7c3aed" stopOpacity="0.12" />
								<stop offset="1" stopColor="#06b6d4" stopOpacity="0.06" />
							</linearGradient>
						</defs>

						<rect x="12" y="28" width="224" height="160" rx="12" fill="#eef2ff" />
						<rect x="44" y="68" width="160" height="12" rx="6" fill="#c7d2fe" />
						<rect x="44" y="96" width="120" height="12" rx="6" fill="#c7d2fe" />
						<rect x="44" y="124" width="80" height="12" rx="6" fill="#c7d2fe" />
						<circle cx="286" cy="86" r="54" fill="url(#g1)" />

						<g transform="translate(248,62)">
							<circle cx="48" cy="48" r="48" fill="#7c3aed" opacity="0.12" />
							<text
								x="48"
								y="58"
								textAnchor="middle"
								fontSize="36"
								fontWeight="700"
								fill="#4f46e5"
								fontFamily='Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue"'
							>
								404
							</text>
						</g>

						<path d="M0 220h360" stroke="#e6e9ef" strokeWidth="2" />
					</svg>
				</figure>
			</section>
		</main>
	);
}


