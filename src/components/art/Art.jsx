import React from 'react'
import './art.css'

const Art = () => {
	return (
		<section id='art'>
			<h5>Click links to</h5>
			<h2>More Arts</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Skating 2023</h3>
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
								<a href="https://www.youtube.com/watch?v=KU5c9WJhVUA&list=PLjBGZZdFrlDTkosDOGriK-r6HHyU0cLG2&index=1" className='text-light link'>Watch SF Gala Swan Program.</a>					
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
			</div>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Skating </h3>
					<div className="experience__content">
						{/* <article className='experience__details'>
							<div>
								<h4>Moves in the Field</h4>
								<a href="https://helena-f.github.io/3D/" className='text-light link'>Senior Moves Test</a>					
							</div>
						</article> */}
						<article className='experience__details'>
							<div>
								<h4>Theater on Ice 2022</h4>
								<a href="https://www.youtube.com/watch?v=xoLBkU88Lgc" className='text-light link'>Watch 2022 Junior National Bronze Medalist.</a>					
							</div>
						</article>
						<article className='experience__details'>
							<div>
								<h4>Theater on Ice 2019</h4>
								<a href="https://www.youtube.com/watch?v=5gnyjl_pdkw" className='text-light link'>Watch 2019 Novice National Pewter Medalist.</a>					
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}
  export default Art