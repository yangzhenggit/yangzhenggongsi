import { get } from '../get.js'

export function getSearchData(page, cityName, category, keyWord) {
	const keyWordStr = keyWord ? '/' +  keyWord : ''
	const result = get('/api/search/' + page + '/' + cityName + '/' + category + keyWordStr)
	return result
}