import React from "react"
import { styled } from "@mui/material/styles"

let ContainerStyled = styled("div")`
	width: 1000px;
	max-width: 100%;
	padding: 0 20px;
	margin: 0 auto;
`

export default function Container() {
	return (
		<ContainerStyled>
			<h1>heck</h1>
		</ContainerStyled>
	)
}
