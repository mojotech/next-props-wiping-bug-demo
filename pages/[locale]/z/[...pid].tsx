import type { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const VanillaUnenhanced = (props) => {
	const router = useRouter()
	console.log('Got to VanillaUnEnhanced', { props, router })
	return <h1>VanillaUnEnhanced props {JSON.stringify(props)}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: [],

	fallback: 'blocking',
})

export const getStaticProps = async (context) => {
	console.log('got to VanillaUnenhanced getStaticProps', { context })
	return {
		props: {
			product: { aye: 'bar' },
		},
		revalidate: 3600,
	}
}

export default VanillaUnenhanced
