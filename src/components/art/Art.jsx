import React from 'react'
import './art.css'

const Art = () => {
	return (
		<section id='art'>
			<h5>Click links to</h5>
			<h2>More Arts</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Skating</h3>
					<div className="experience__content">
						{/* <article className='experience__details'>
							<div>
								<h4>Moves in the Field</h4>
								<a href="https://helena-f.github.io/3D/" className='text-light link'>Senior Moves Test</a>					
							</div>
						</article> */}
						<article className='experience__details'>
							<div>
								<h4>Theater on Ice</h4>
								<a href="https://www.youtube.com/watch?v=KU5c9WJhVUA&list=PLjBGZZdFrlDTkosDOGriK-r6HHyU0cLG2&index=1" className='text-light link'>Watch 2023 Swan Program.</a>					
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Program Makeup</h4>
								<a href="https://youtu.be/aXUFFdcnhdE" className='text-light link'>Watch Makeup Design Tutorial.</a>					
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Cello</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<div>
								<h4>Chamber Music Club</h4>
								<a href="https://drive.google.com/file/d/18njALV6ohK3xCZGts-zMJoqVEUx1zhkO/view?usp=sharing" className='text-light link'>Listen to Shostakovich Waltz No. 2.</a>
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Mr. Sandman Recording</h4>
								<a href="https://drive.google.com/file/d/1OzQt8_xZed6WK44uqjxOx0NpKWKkEO0o/view?usp=sharing" className='text-light link'>Listen to 4 cello Mr. Sandman.</a>
							</div>
						</article>
					</div>
				</div>
			</div>

		</section>
	)
}
  export default Art