import React from "react";

//style
import styled from "styled-components";

//redux
import { useSelector } from "react-redux";

const Image = () => {
	const post = useSelector((state) => state.Image);

	return (
		<StyledImg>
			<ImageContiner>
				<img src={post.item} alt={post.title} />
			</ImageContiner>
		</StyledImg>
	);
};

const StyledImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ImageContiner = styled.div`
	padding: 2rem 2rem;
	overflow: hidden;

	img {
		width: 100%;
		object-fit: cover;
	}
`;

export default Image;
