import React, { useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import EditForm from "./EditForm";

//styles
import { Card, ListGroupItem, ListGroup, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faThumbsDown,
	faPenSquare,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";

//redux
import { useDispatch, useSelector } from "react-redux";
import { DeletePost, LikePost } from "../actions/PostActions";
import { setImage } from "../actions/ImageActions";
import { setPost, ClearPost } from "../actions/EditActions";

//util
import { getUserID } from "../util/getUserinfo";

const Item = ({ Post }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const SelectedPost = useSelector((state) => state.Edit);

	//state to see if the user liked the post before or not to switch icon
	const MyID = getUserID();
	const index = Post.Likes.findIndex((id) => id === MyID) === -1 ? false : true;
	const [isLiked, setisLike] = useState(index);
	//
	const DeleteHandler = () => {
		dispatch(DeletePost(Post._id));
	};

	const LikeHandler = () => {
		dispatch(LikePost(Post._id));
		setisLike(!isLiked);
	};

	const EditHandler = () => {
		if (SelectedPost && SelectedPost._id === Post._id) {
			dispatch(ClearPost());
			return;
		}

		dispatch(setPost(Post));
	};

	const ImageHandler = () => {
		dispatch(setImage(Post));
		history.push(`/image/${Post._id}`);
	};

	return (
		<Col>
			<Card style={{ borderRadius: "2rem", overflow: "hidden" }}>
				<Card.Img
					variant="top"
					src={Post.item}
					style={{
						width: "100%",
						height: "30vh",
						objectFit: "cover",
						cursor: "pointer",
					}}
					onClick={ImageHandler}
				/>
				<Card.Body>
					<Card.Title>{Post.title}</Card.Title>
					<Card.Text>{Post.description}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Creator : {Post.name}</ListGroupItem>
					<ListGroupItem>Likes : {Post.Likes.length}</ListGroupItem>
					<ListGroupItem> Uploaded {moment(Post.date).fromNow()}</ListGroupItem>
				</ListGroup>
				<Card.Body className="d-flex justify-content-center">
					{localStorage.getItem("profile") && (
						<Button
							onClick={LikeHandler}
							size="sm"
							style={{ marginRight: "1rem" }}
						>
							<FontAwesomeIcon icon={isLiked ? faThumbsDown : faThumbsUp} />
						</Button>
					)}
					{MyID === Post.creator && (
						<>
							<Button
								onClick={EditHandler}
								variant="success"
								size="sm"
								style={{ marginRight: "1rem" }}
							>
								<FontAwesomeIcon icon={faPenSquare} />
							</Button>

							<Button
								onClick={DeleteHandler}
								variant="danger"
								size="sm"
								style={{ marginRight: "1rem" }}
							>
								<FontAwesomeIcon icon={faTrash} />
							</Button>
						</>
					)}
				</Card.Body>
				{SelectedPost && SelectedPost._id === Post._id ? (
					<Card.Footer>
						<EditForm />
					</Card.Footer>
				) : (
					""
				)}
			</Card>
		</Col>
	);
};

export default Item;
