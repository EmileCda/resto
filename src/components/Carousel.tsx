import { PageContainer, Title } from "../styles/App.style";

export default function Carousel() {
	return (
		<>
			<PageContainer>
				<Title>Carousel</Title>
        <CarouselSlick>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                </CarouselSlick>
			</PageContainer>
			
			
		</>
	);
}
