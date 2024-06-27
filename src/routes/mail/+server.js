import Email from '$lib/Email.svelte';
import { render } from 'svelte/server';

export function GET() {
				let prefix = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`
				let res =  render(Email, {props: {}})
				return new Response(prefix + res.body);
}
