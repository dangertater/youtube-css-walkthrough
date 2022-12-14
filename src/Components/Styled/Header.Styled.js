import { styled } from "@mui/material/styles"

export const StyledHeader = styled("header")`
	background-color: ${(props) => {
		return props.theme.colors.header
	}};
`
