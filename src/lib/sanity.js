// import sanityConfig from '../../sanity/sanity.json';

// const baseURL = `https://${sanityConfig.api.projectId}.api.sanity.io/v2021-06-07/data/query/${sanityConfig.api.dataset} `;

const project = 'yoew8mbn';
const dataset = 'production';

const apiURL = `https://${project}.api.sanity.io/v2021-06-07/data/query/${dataset}`;

/**
 * @param {typeof fetch} fetch
 * @param {string} query
 */
export async function querySanity(fetch, query) {
	const url = new URL(apiURL);
	url.searchParams.set('query', query);
	const response = await fetch(url.toString());
	if (!response.ok) {
		throw new Error('could not make sanity query:\n' + (await response.text()));
	}
	return await response.json();
}

const imageURL = `https://cdn.sanity.io/images/${project}/${dataset}/`;

/**
 * @param {{ asset: { _ref: string } } } image
 * @returns {string}
 */
export function sanityImageURL(image) {
	const [, id, size, format] = image.asset._ref.split('-');
	const url = imageURL + `${id}-${size}.${format}`;
	const parameters = new URLSearchParams({
		auto: 'format',
		w: '200'
	});
	return url + '?' + parameters;
}
