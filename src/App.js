import React from "react"
import Header from "./Components/Header"
import Container from "./Components/Styled/Container.Styled"
import { ThemeProvider } from "@emotion/react"
import { GlobalStyles } from "@mui/styled-engine"

let theme = { colors: { header: "#ebfbff", body: "#fff", footer: "#003333" } }

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles>
					<Header></Header>
					<Container></Container>
				</GlobalStyles>
			</>
		</ThemeProvider>
	)
}

export default App
