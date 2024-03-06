<script>
	let reviews = [
		{
			logo: '',
			name: 'Delivery Express',
			tag: '@Delivery Company',
			views: '100k',
			likes: '10K',
			shortDes:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether it"s packages documents, or special deliveries, trust us to bring efficiency',
			longDes:
				'Experience the pinnacle of convenience with Delivery Express, where speed meets precision in every delivery. Our express service ensures your packages reach their destination swiftly and securely, setting a new standard for seamless delivery. Trust us to exceed expectations – because when time matters, SwiftSprint delivers. Join the express revolution and redefine your delivery experience today!',
			founder: 'Lewis Himilton',
			phoneNum: '0558238300',
			email: 'l.hamilton@esi-sba.dz',
			location: 'BouIsmail, Tipaza',
			goals: [
				'Exceptional Customer Service',
				'On-Time Deliveries',
				'Reliability and Consistency',
				'Safety and Security'
			],
			plans: [
				'Expand Service Coverage',
				'Advanced Tracking Systems',
				'Customer Loyalty Programs',
				'Enhance Fleet Efficiency'
			],
			expand: false
		},
		{
			logo: '',
			name: 'Delivery Express',
			tag: '@Delivery Company',
			views: '100k',
			likes: '10K',
			shortDes:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether it"s packages documents, or special deliveries, trust us to bring efficiency',
			longDes:
				'Experience the pinnacle of convenience with Delivery Express, where speed meets precision in every delivery. Our express service ensures your packages reach their destination swiftly and securely, setting a new standard for seamless delivery. Trust us to exceed expectations – because when time matters, SwiftSprint delivers. Join the express revolution and redefine your delivery experience today!',
			founder: 'Lewis Himilton',
			phoneNum: '0558238300',
			email: 'l.hamilton@esi-sba.dz',
			location: 'BouIsmail, Tipaza',
			goals: [
				'Exceptional Customer Service',
				'On-Time Deliveries',
				'Reliability and Consistency',
				'Safety and Security'
			],
			plans: [
				'Expand Service Coverage',
				'Advanced Tracking Systems',
				'Customer Loyalty Programs',
				'Enhance Fleet Efficiency'
			],
			expand: false
		},
		{
			logo: '',
			name: 'Delivery Express',
			tag: '@Delivery Company',
			views: '100k',
			likes: '10K',
			shortDes:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether it"s packages documents, or special deliveries, trust us to bring efficiency',
			longDes:
				'Experience the pinnacle of convenience with Delivery Express, where speed meets precision in every delivery. Our express service ensures your packages reach their destination swiftly and securely, setting a new standard for seamless delivery. Trust us to exceed expectations – because when time matters, SwiftSprint delivers. Join the express revolution and redefine your delivery experience today!',
			founder: 'Lewis Himilton',
			phoneNum: '0558238300',
			email: 'l.hamilton@esi-sba.dz',
			location: 'BouIsmail, Tipaza',
			goals: [
				'Exceptional Customer Service',
				'On-Time Deliveries',
				'Reliability and Consistency',
				'Safety and Security'
			],
			plans: [
				'Expand Service Coverage',
				'Advanced Tracking Systems',
				'Customer Loyalty Programs',
				'Enhance Fleet Efficiency'
			],
			expand: false
		},
		{
			logo: '',
			name: 'Delivery Express',
			tag: '@Delivery Company',
			views: '100k',
			likes: '10K',
			shortDes:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether it"s packages documents, or special deliveries, trust us to bring efficiency',
			longDes:
				'Experience the pinnacle of convenience with Delivery Express, where speed meets precision in every delivery. Our express service ensures your packages reach their destination swiftly and securely, setting a new standard for seamless delivery. Trust us to exceed expectations – because when time matters, SwiftSprint delivers. Join the express revolution and redefine your delivery experience today!',
			founder: 'Lewis Himilton',
			phoneNum: '0558238300',
			email: 'l.hamilton@esi-sba.dz',
			location: 'BouIsmail, Tipaza',
			goals: [
				'Exceptional Customer Service',
				'On-Time Deliveries',
				'Reliability and Consistency',
				'Safety and Security'
			],
			plans: [
				'Expand Service Coverage',
				'Advanced Tracking Systems',
				'Customer Loyalty Programs',
				'Enhance Fleet Efficiency'
			],
			expand: false
		},
		{
			logo: '',
			name: 'Delivery Express',
			tag: '@Delivery Company',
			views: '100k',
			likes: '10K',
			shortDes:
				'we redefine the delivery experience. Our commitment is simple – fast, reliable, and seamless service. Whether it"s packages documents, or special deliveries, trust us to bring efficiency',
			longDes:
				'Experience the pinnacle of convenience with Delivery Express, where speed meets precision in every delivery. Our express service ensures your packages reach their destination swiftly and securely, setting a new standard for seamless delivery. Trust us to exceed expectations – because when time matters, SwiftSprint delivers. Join the express revolution and redefine your delivery experience today!',
			founder: 'Lewis Himilton',
			phoneNum: '0558238300',
			email: 'l.hamilton@esi-sba.dz',
			location: 'BouIsmail, Tipaza',
			goals: [
				'Exceptional Customer Service',
				'On-Time Deliveries',
				'Reliability and Consistency',
				'Safety and Security'
			],
			plans: [
				'Expand Service Coverage',
				'Advanced Tracking Systems',
				'Customer Loyalty Programs',
				'Enhance Fleet Efficiency'
			],
			expand: false
		}
	];
	const hadleClick = (i) => {
		reviews[i].expand = !reviews[i].expand;
	};
</script>

<section class="shadow-sm rounded-lg ring-1 ring-gray-200 md:m-10 p-2 md:p-10">
	<h1 class="text-500 max-md:text-center md:text-600 font-bold text-main mb-5 md:mb-10">
		Start Ups Review
	</h1>
	{#each reviews as review, i}
		<div class="card shadow-md rounded-xl ring-1 ring-gray-200 p-3 md:p-8 my-5">
			<div class="md:flex justify-between items-start">
				<div class="flex items-center">
					<img class="w-16 h-16 m-2 -ml-2" src="/home/comments/icon.png" alt="" />
					<div>
						<p class="text-500 font-semibold">{review.name}</p>
						<p class="text-main">{review.tag}</p>
					</div>
				</div>
				<div class="text-400 font-semibold text-[#595959]">
					<span class="text-[1.2em]">
						<img class="inline-block w-8" src="/eye.svg" alt="" />
						{review.views} Views
					</span>
					<span class="text-[1.2em]">
						<img class="inline-block" src="/heart.svg" alt="" />
						{review.likes} Love
					</span>
				</div>
			</div>
			<p class="text-400 my-5 text-justify">
				{review.shortDes}
			</p>
			<div class="more" class:down={review.expand} class:up={!review.expand}>
				<div class="flex max-md:flex-col-reverse gap-10">
					<div class="text-400 shrink-0 flex flex-col">
						<div class="flex justify-evenly my-3">
							<img src="/gmail.svg" alt="" />
							<img src="/facebook.svg" alt="" />
							<img src="/instagram.svg" alt="" />
							<img src="/linkedin.svg" alt="" />
						</div>
						<div class="flex my-2 gap-3">
							<img src="/man.svg" alt="" />
							<p>{review.founder}</p>
						</div>
						<div class="flex my-2 gap-3">
							<img src="/phone.svg" alt="" />
							<p>{review.phoneNum}</p>
						</div>
						<div class="flex my-2 gap-3">
							<img src="/hashtag.svg" alt="" />
							<p>{review.email}</p>
						</div>
						<div class="flex my-2 gap-3">
							<img src="/pin.svg" alt="" />
							<p>{review.location}</p>
						</div>
						<a
							href="/startUps/profile"
							class="bg-main mt-auto text-white rounded-xl p-3 text-400 font-semibold w-fit block"
							>See Profile</a
						>
					</div>
					<div class="text-400">
						<div class="mb-5">
							<h3 class="mt-2 text-500 font-meduim">ABOUT</h3>
							<p>{review.longDes}</p>
						</div>
						<div class="md:flex">
							<div class="flex-1">
								<h3 class="text-500 font-meduim">GOALS</h3>
								<div>
									{#each review.goals as goal}
										<div class="flex items-center my-2">
											<div class="mr-3 w-3 h-3 bg-[#767474] rounded-full"></div>
											<p>{goal}</p>
										</div>
									{/each}
								</div>
							</div>
							<div class="flex-1">
								<h3 class="text-500 font-meduim">PLANS</h3>
								<div>
									{#each review.plans as plan}
										<div class="flex items-center my-2">
											<div class="mr-3 w-3 h-3 bg-[#767474] rounded-full"></div>
											<p>{plan}</p>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex">
				<button on:click={() => hadleClick(i)} class="ml-auto text-main font-semibold">
					see more Details
					<img class:rotate-180={review.expand} class="inline-block" src="/down.svg" alt="" />
				</button>
			</div>
		</div>
	{/each}
</section>

<style>
	.more {
		display: grid;
		transition: grid-template-rows 0.6s ease;
	}
	.up {
		grid-template-rows: 0fr;
	}
	.down {
		grid-template-rows: 1fr;
	}
	.more > div {
		overflow: hidden;
	}
</style>
