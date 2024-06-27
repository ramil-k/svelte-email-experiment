<script lang="ts">
  import logoRaw from "./images/logo.png"
	import { Button, Container, Head, Hr, Html, Img, Preview, Section, Text, Column } from 'svelte-email';

	const fontFamily =
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

  // const logoBase64 = `data:image/png;base64,${Buffer.from(logoRaw, 'binary').toString('base64')}`;
	const main = {
		backgroundColor: '#ffffff'
	};

	const container = {
		margin: '0 auto',
		padding: '20px 0 48px'
	};

	const logo = {
		margin: '0 auto'
	};

	const paragraph = {
		fontFamily,
		fontSize: '16px',
		lineHeight: '26px'
	};

	const btnContainer = {
		textAlign: 'center' as const
	};

	const button = {
		fontFamily,
		backgroundColor: '#5F51E8',
		borderRadius: '3px',
		textDecoration: 'none',
		textAlign: 'center' as const,
		display: 'block',
		color: "rgb(255, 255, 255)",
    display: "block",
    padding: "18px 27px"
	};

	const hr = {
		borderColor: '#cccccc',
		margin: '20px 0'
	};

	const footer = {
		fontFamily,
		color: '#8898aa',
		fontSize: '12px'
	};
</script>

<Html lang="en">
	<Head />
	<Preview preview="Книга «Сложный дизайнер» и её новости" />
	<Section style={main}>
		<Container style={container}>
			<Img
				src={logoRaw}
				alt="Intuition" 
				style={logo}
				width="200"
				height="50"
			/>
			<Text style={paragraph}>Привет!</Text>
			<Text style={paragraph}>Вы получили это письмо, потому что однажды купили или пытались купить книгу «Сложный дизайнер» Жени Арутюнова. Помните? Ну, неважно. Мы пишем примерно раз в год, всегда внезапно и всегда по делу. Нажмите на кнопку.</Text>
			<Section style={btnContainer}>
				<Button pX={12} pY={12} style={button} href="https://github.com/carstenlebek/svelte-email">
				  Я кнопка.
				</Button>
			</Section>
			<Text style={paragraph}>Happy coding!</Text>
			<Hr style={hr} />
			<Text style={footer}>Carsten Lebek</Text>
		</Container>
	</Section>
</Html>
