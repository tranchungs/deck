/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import Vue from 'vue'
import { generateUrl } from '@nextcloud/router'

import CardCreateDialog from './CardCreateDialog'
import { buildSelector } from './helpers/selector'
import './init-collections'

// eslint-disable-next-line
__webpack_nonce__ = btoa(OC.requestToken);
// eslint-disable-next-line
__webpack_public_path__ = OC.linkTo('deck', 'js/');

Vue.prototype.t = t
Vue.prototype.n = n
Vue.prototype.OC = OC

window.addEventListener('DOMContentLoaded', () => {
	if (!window.OCA?.Talk?.registerMessageAction) {
		return
	}

	window.OCA.Talk.registerMessageAction({
		label: t('deck', 'Create a card'),
		icon: 'icon-deck',
		async callback({ message: { message, actorDisplayName }, metadata: { name: conversationName, token: conversationToken } }) {
			const shortenedMessageCandidate = message.replace(/^(.{255}[^\s]*).*/, '$1')
			const shortenedMessage = shortenedMessageCandidate === '' ? message.substr(0, 255) : shortenedMessageCandidate
			try {
				await buildSelector(CardCreateDialog, {
					title: shortenedMessage,
					description: message + '\n\n' + '['
						+ t('deck', 'Message from {author} in {conversationName}', { author: actorDisplayName, conversationName })
						+ '](' + generateUrl('/call/' + conversationToken) + ')',
				})
			} catch (e) {
				console.debug('Card creation dialog was canceled')
			}
		},
	})
})
