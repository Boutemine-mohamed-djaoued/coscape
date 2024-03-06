<script>
	export let state;
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let chart;
	let color = '#5D5FEF';
	let num = 8;
	let width = 2000;
	let height = 1200;
	const marginTop = 20;
	const marginRight = 20;
	const marginBottom = 30;
	const marginLeft = 40;
	const barSpacing = 10;
	let diff = 60;

	const reset = () => {
		if (window.innerWidth < 600) {
			num = 10;
			width = 400;
			height = 350;
			diff = 20;
		} else {
			num = 20;
			height = 600;
			width = 2000;
			diff = 60;
		}
	};
	onMount(() => {
		reset();
		let unemployment = [];
		for (let i = 0; i < num; i++) {
			unemployment.push({ region: `${i}`, rate: Math.random() * 80 + 20 });
		}
		if (state == 'production') color = '#5D5FEF';
		else if (state == 'sales') color = '#90BE6D';
		else if (state == 'opinions') color = '#000000';

		const maxRate = d3.max(unemployment, (d) => d.rate);

		const x = d3
			.scaleBand()
			.domain(unemployment.map((d) => d.region))
			.range([marginLeft, width - marginRight])
			.paddingInner(0.1)
			.paddingOuter(0.1)
			.padding(barSpacing / (width - marginLeft - marginRight));

		const y = d3
			.scaleLinear()
			.domain([0, maxRate])
			.range([height - marginBottom, marginTop]);

		const svg = d3
			.create('svg')
			.attr('width', width)
			.attr('height', height)
			.attr('viewBox', [0, 0, width, height])
			.attr('style', 'max-width: 100%; height: auto;');

		svg
			.append('g')
			.selectAll('line')
			.data(y.ticks())
			.join('line')
			.attr('x1', marginLeft)
			.attr('x2', width - marginRight)
			.attr('y1', (d) => y(d))
			.attr('y2', (d) => y(d))
			.attr('stroke', 'gray')
			.attr('stroke-width', 1)
			.attr('stroke-dasharray', '2');

		svg
			.append('g')
			.selectAll('line')
			.data(x.domain())
			.join('line')
			.attr('x1', (d) => x(d) + x.bandwidth() / 2)
			.attr('x2', (d) => x(d) + x.bandwidth() / 2)
			.attr('y1', marginTop)
			.attr('y2', height - marginBottom)
			.attr('stroke', 'gray')
			.attr('stroke-width', 1)
			.attr('stroke-dasharray', '2');

		svg
			.append('g')
			.selectAll('rect')
			.data(unemployment)
			.join('rect')
			.attr('x', (d) => x(d.region) + diff / 2)
			.attr('y', (d) => height - marginBottom)
			.attr('height', 0) // Initial height set to 0
			.attr('width', x.bandwidth() - diff)
			.attr('fill', color)
			.call((enter) =>
				enter
					.transition() // Start of the transition
					.duration(600) // Duration of the animation
					.delay((d, i) => 50 * i)
					.attr('y', (d) => y(d.rate))
					.attr('height', (d) => height - marginBottom - y(d.rate))
			),
			svg
				.append('g')
				.attr('transform', `translate(0,${height - marginBottom})`)
				.call(d3.axisBottom(x));

		svg.append('g').attr('transform', `translate(${marginLeft},0)`).call(d3.axisLeft(y));

		chart = svg.node();

		let solve = document.querySelector('.goat');
		solve.appendChild(chart);
	});
</script>

<div class="goat" bind:this={chart}></div>

<!-- <script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let chart;
	let unemployment = [
		{ region: 'Region A', rate: 1 },
		{ region: 'Region c', rate: 2 },
		{ region: 'Region C', rate: 3 },
		{ region: 'Region C', rate: 4 }
	];
	onMount(() => {
		// Declare the chart dimensions and margins.
		const width = 300;
		const height = 200;
		const marginTop = 20;
		const marginRight = 20;
		const marginBottom = 30;
		const marginLeft = 40;

		// Bin the data.
		const bins = d3
			.bin()
			.thresholds(unemployment.length)
			.value((d) => d.rate)(unemployment); // Assuming `unemployment` is your data variable
		console.log(bins);
		// Declare the x (horizontal position) scale.
		const x = d3
			.scaleLinear()
			.domain([bins[0].x0, bins[bins.length - 1].x1])
			.range([marginLeft, width - marginRight]);

		// Declare the y (vertical position) scale.
		let maxt = 0;
		for (let i = 0; i < unemployment.length; i++) {
			maxt = Math.max(maxt, unemployment[i].rate);
		}
		console.log(maxt);
		const y = d3
			.scaleLinear()
			.domain([0, maxt])
			.range([height - marginBottom, marginTop]);

		// Create the SVG container.
		let svg = d3
			.create('svg')
			.attr('width', width)
			.attr('height', height)
			.attr('viewBox', [0, 0, width, height])
			.attr('style', 'max-width: 100%; height: auto;');

		console.log('hello');
		console.log(svg);
		svg
			.append('g')
			.attr('fill', 'steelblue')
			.selectAll()
			.data(bins)
			.join('rect')
			.attr('x', (d, i) => x(d.x0) + 10)
			.attr('width', (d) => x(d.x1) - x(d.x0) - 20)
			// .attr('y', (d) => y(d.length))
			// .attr('height', (d) => y(0) - y(d.length));
			.attr('y', (d, i) => height - marginBottom - 40 * unemployment[i].rate)
			.attr('height', (d, i) => unemployment[i].rate * 40);

		console.log('hello1');
		console.log(svg);
		// Add the x-axis and label.
		svg
			.append('g')
			.attr('transform', `translate(0,${height - marginBottom})`)
			.call(
				d3
					.axisBottom(x)
					.ticks(width / 80)
					.tickSizeOuter(0)
			)
			.call((g) =>
				g
					.append('text')
					.attr('x', width)
					.attr('y', marginBottom - 4)
					.attr('fill', 'currentColor')
					.attr('text-anchor', 'end')
					.text('Unemployment rate (%) →')
			);
		console.log('hello2');
		console.log(svg);
		// Add the y-axis and label, and remove the domain line.
		svg
			.append('g')
			.attr('transform', `translate(${marginLeft},0)`)
			.call(d3.axisLeft(y).ticks(height / 40))
			.call((g) => g.select('.domain').remove())
			.call((g) =>
				g
					.append('text')
					.attr('x', -marginLeft * 2)
					.attr('y', 10)
					.attr('fill', 'currentColor')
					.attr('text-anchor', 'start')
					.text('↑ Frequency (no. of counties)')
			);

		// Assign the SVG element to the chart variable.
		chart = svg.node();
		console.log('hello3');
		console.log(svg);
		console.log(chart);
		let solve = document.querySelector('.goat');
		solve.appendChild(chart);
	});
</script>

<div class="goat" bind:this={chart}>

</div> -->
