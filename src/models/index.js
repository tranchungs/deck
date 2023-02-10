/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
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

/**
 * Board model
 *
 * @typedef {Object} Board
 * @property {String} title
 * @property {boolean} archived
 * @property {number} shared 1 (shared) or 0 (not shared)
 */

/**
 * Stack model
 *
 * @typedef {Object} Stack
 * @property {String} title
 * @property {number} boardId
 * @property {number} order
 */

/**
 * Card model
 *
 * @typedef {Object} Card
 * @property {String} title
 * @property {boolean} archived
 * @property {number} order
 */
/**
 * Label model
 *
 * @typedef {Object} Label
 * @property {String} title
 * @property {String} color
 */
