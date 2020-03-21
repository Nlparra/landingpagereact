import React from "react";
import PropTypes from "prop-types";

export const Cards = props => {
	return (
		<div className={props.className}>
			<img
				src="http://placehold.it/500x325"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body ">
				<h5 className="card-title ">Card title</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural
					lead-in to additional content. This content is a little bit
					longer.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Find out more!
				</a>
				<p className="card-text">
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</p>
			</div>
		</div>
	);
};

Cards.propTypes = {
	className: PropTypes.text
};
