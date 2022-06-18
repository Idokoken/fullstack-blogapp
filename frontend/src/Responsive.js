import {css} from 'styled-components'

export const tablet = (props) => {
	return css`
	@media only screen and (min-width: 768px) {
		${props}
	}
	`
}
