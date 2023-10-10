<script>
	import aboutImage from '$images/rose_bowl.jpg'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About The Phonograph Company" />
</svelte:head>

<div class="about">
	<p class="about__heading">About Us</p>
	<p class="about__title">The Phonograph Company, LLC</p>
	<img src={aboutImage} alt="" class="about__image">
	<p class="about__image--description">Our monthly shop at the Rose Bowl Flea Market in Pasadena, California.</p>
	<div class="about__text">
		<p class="about__text--paragraph">We have been buying and selling antique phonographs, gramophones, radios and music boxes since 1977, when we still in school. During the past 45 years we have handled some of the finest collections ever assembled, and have helped both beginning and advanced collectors achieve their goals. We travel the world to assist our clients. Most of our business is with long time repeat customers; new clients primarily come from referrals.</p>
		<p class="about__text--paragraph">To introduce early mechanical music technology to a new generation of enthusiasts, each month we demonstrate 100+ year old working phonographs, gramophones and music boxes at the “antiques section” entrance of the world famous Rose Bowl Flea Market, in Pasadena, CA. Each month, thousands of folks are amazed to hear and see these mechanical marvels.</p>
		<p class="about__text--paragraph">While we are relatively new to internet sales, know that we are experts in our field. Co-owner Steve Oliphant has been one of the busiest people in the mechanical music arena for over 45 years – this is among his life’s passions. He is one of the world’s most renowned experts in the authentication of antique phonographs and gramophones. His knowledge is frequently called upon to evaluate pieces by museums, advanced collectors and those purchasing their first phonograph.</p>
		<p class="about__text--paragraph">Every item we offer for sale is guaranteed to be authentic and in good working order.</p>
		<p class="about__text--paragraph">We have packed and shipped these precious items both across the country and across the world efficiently and without damage. We frequently make trips from our Southern California base to deliver high value items door to door, “blanket wrapped”.</p>
		<p class="about__text--paragraph">We are active buyers of top quality phonographs, gramophones, music boxes and other mechanical antiques. Please contact us should the time come when you wish to sell your collection or special piece.</p>
		<p class="about__text--paragraph">We give back to the hobby through presentations, and donations of time and money. We are long time members and active supporters of</p>
	</div>
	<div class="about__contributions">
		<a href="https://www.antiquephono.org/" class="about__contributions--contribution">Antique Phonograph Society</a>
		<a href="https://mbsi.org/" class="about__contributions--contribution">Musical Box Society</a>
		<a href="https://friendsofedison.org/" class="about__contributions--contribution">Friends of Edison</a>
		<a href="https://www.antiqueradios.org/" class="about__contributions--contribution"> Southern California Antique Radio Society</a>
	</div>
	<p class="about__contributions--more">and many similar organizations throughout the world.</p>
</div>

<style lang="sass">
	.about
		// 994px
		width: calc(232.5px*4 + 64px)
		display: flex
		flex-direction: column
		align-items: center
		margin: 0 auto
		&__heading
			font-size: 24px
			font-weight: 600
			margin-top: 48px
			margin-bottom: 16px
		&__title
			margin: 0 auto 24px
			font-weight: 600
		&__image
			margin: 24px auto 0
			height: 600px
			&--description
				font-size: 12px
				margin-top: 8px
				margin-bottom: 24px
		&__text
			&--paragraph
				margin-bottom: 24px
				font-size: 16px
				line-height: 1.5
		&__contributions
			margin-top: 24px
			margin-bottom: 24px
			display: flex
			flex-wrap: wrap
			justify-content: space-between
			&--contribution
				text-align: center
				flex-basis: 40%
				padding: 8px
			&--more
				margin-bottom: 24px

	@media only screen and (max-width: 1200px)
		.about
			// 833px
			width: calc(192.2px*4 + 64px)
			&__image
				height: 480px

	@media only screen and (max-width: 992px)
		.about
			// 659px
			width: calc(148.8px*4 + 64px)
			&__image
				height: 400px

	@media only screen and (max-width: 768px)
		.about
			width: 525px
			&__image
				height: 300px
				&--description
					font-size: 10px
			&__text--paragraph
				line-height: 1
				font-size: 14px
			&__contributions
				&--contribution
					font-size: 14px
				&--more
					font-size: 14px

	@media only screen and (max-width: 576px)
		.about
			width: 356.55px
			&__image
				height: 250px
				margin: 12px auto 0
				&--description
					margin-bottom: 12px
			&__text
				&--paragraph
					margin-bottom: 12px
			&__contributions--contribution
				flex-basis: 100%
				font-size: 16px
</style>