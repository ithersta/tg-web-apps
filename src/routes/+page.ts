import {redirect} from '@sveltejs/kit';

export function load() {
    throw redirect(302, 'https://github.com/ithersta/tg-web-apps');
}
